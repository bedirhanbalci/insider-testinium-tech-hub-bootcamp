package handlers

import (
	"bootcamp/models"
	"context"
	"database/sql"
	"encoding/json"
	"net/http"
	"time"

	"github.com/go-redis/redis/v8"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
)

func CreateUser(db *sql.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		user := new(models.User)
		if err := c.Bind(user); err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}

		if err := c.Validate(user); err != nil {
			return c.JSON(http.StatusUnprocessableEntity, err.Error())
		}

		user.UUID = uuid.New()

		_, err := db.Exec("INSERT INTO users (uuid, name, surname, email) VALUES ($1, $2, $3, $4)",
			user.UUID, user.Name, user.Surname, user.Email)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		return c.JSON(http.StatusCreated, user)
	}
}


func GetUser(db *sql.DB, rdb *redis.Client) echo.HandlerFunc {
	return func(c echo.Context) error {
		ctx := context.Background()
		id := c.Param("id")
		
		_, err := uuid.Parse(id)
		if err != nil {
			return c.JSON(http.StatusBadRequest, "Invalid UUID")
		}

		cachedUser, err := rdb.Get(ctx, id).Result()
		if err == redis.Nil {
			var user models.User
			err := db.QueryRow("SELECT uuid, name, surname, email FROM users WHERE uuid = $1", id).
				Scan(&user.UUID, &user.Name, &user.Surname, &user.Email)
			if err != nil {
				if err == sql.ErrNoRows {
					return c.JSON(http.StatusNotFound, "User not found")
				}
				return c.JSON(http.StatusInternalServerError, err.Error())
			}

			userJSON, _ := json.Marshal(user)
			rdb.Set(ctx, id, userJSON, 5*time.Minute)

			return c.JSON(http.StatusOK, user)
		} else if err != nil {
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		var user models.User
		json.Unmarshal([]byte(cachedUser), &user)
		return c.JSON(http.StatusOK, user)
	}
}


func UpdateUser(db *sql.DB, rdb *redis.Client) echo.HandlerFunc {
	return func(c echo.Context) error {
		userId := c.Param("id")
		id, err := uuid.Parse(userId)
		if err != nil {
			return c.JSON(http.StatusBadRequest, "Invalid UUID")
		}

		user := new(models.User)
		if err := c.Bind(user); err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}

		if err := c.Validate(user); err != nil {
			return c.JSON(http.StatusUnprocessableEntity, err.Error())
		}

		user.UUID = id

		_, err = db.Exec("UPDATE users SET name = $1, surname = $2, email = $3 WHERE uuid = $4",
			user.Name, user.Surname, user.Email, user.UUID)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		ctx := context.Background()
		userJSON, _ := json.Marshal(user)
		rdb.Set(ctx, userId, userJSON, 5*time.Minute)

		return c.JSON(http.StatusOK, user)
	}
}


func DeleteUser(db *sql.DB, rdb *redis.Client) echo.HandlerFunc {
	return func(c echo.Context) error {
		userId := c.Param("id")
		id, err := uuid.Parse(userId)
		if err != nil {
			return c.JSON(http.StatusBadRequest, "Invalid UUID")
		}

		_, err = db.Exec("DELETE FROM users WHERE uuid = $1", id)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		ctx := context.Background()
		rdb.Del(ctx, userId)

		return c.NoContent(http.StatusNoContent)
	}
}
