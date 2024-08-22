package handlers

import (
	"bootcamp/models"
	"database/sql"
	"net/http"

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

func GetUser(db *sql.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		id, err := uuid.Parse(c.Param("id"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, "Invalid UUID")
		}

		var user models.User
		err = db.QueryRow("SELECT uuid, name, surname, email FROM users WHERE uuid = $1", id).
			Scan(&user.UUID, &user.Name, &user.Surname, &user.Email)

		if err != nil {
			if err == sql.ErrNoRows {
				return c.JSON(http.StatusNotFound, "User not found")
			}
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		return c.JSON(http.StatusOK, user)
	}
}

func UpdateUser(db *sql.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		id, err := uuid.Parse(c.Param("id"))
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

		return c.JSON(http.StatusOK, user)
	}
}

func DeleteUser(db *sql.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		id, err := uuid.Parse(c.Param("id"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, "Invalid UUID")
		}

		_, err = db.Exec("DELETE FROM users WHERE uuid = $1", id)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		return c.NoContent(http.StatusNoContent)
	}
}