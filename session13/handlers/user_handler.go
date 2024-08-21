package handlers

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type User struct {
	Name string `json:"name"`
	Surname string `json:"surname"`
	Email string `json:"email"`
}

func GetHello(c echo.Context) error{
		return c.String(http.StatusOK, "Hello, World!")
}

func GetName(c echo.Context) error {
		name := c.Param("name")
		return c.String(http.StatusOK, "Hello, " + name)
}

func CreateUser(c echo.Context) error {
		user := new(User)
		if err := c.Bind(user); err != nil {
			return c.JSON(http.StatusBadRequest, err.Error())
		}
	fmt.Printf("User Created: %s %s (%s)\n", user.Name, user.Surname, user.Email)
	return c.JSON(http.StatusCreated, user)	
}