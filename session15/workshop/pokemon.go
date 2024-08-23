package main

import (
	"log"
	"workshop/database"
	"workshop/models"
	"workshop/routers"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

func main() {
	db, err := database.InitPostgreSQL()
	if err != nil {
		log.Fatal(err)
	}

	rdb := database.InitRedis()

	e := echo.New()
	e.Validator = &models.CustomValidator{Validator: validator.New()}

	routers.InitPokemonRoutes(e, db, rdb)

	e.Logger.Fatal(e.Start(":8080"))
}
