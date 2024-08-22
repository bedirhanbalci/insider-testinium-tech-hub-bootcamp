package main

import (
	"log"
	"workshop/database"
	routes "workshop/routers"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type CustomValidator struct {
	Validator *validator.Validate
}

func (cv *CustomValidator) Validate(i interface{}) error {
	return cv.Validator.Struct(i)
}

func main() {
	
	_, err := database.InitPostgreSQL()
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	e := echo.New()

	e.Validator = &CustomValidator{Validator: validator.New()}

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	routes.InitPokemonRoutes(e)

	log.Fatal(e.Start(":8080"))
}
