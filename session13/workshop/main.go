package main

import (
	"workshop/routers"

	"github.com/labstack/echo/v4"
)
	

func main() {
	e := echo.New()
	routers.InitPokemonRoutes(e)
	e.Logger.Fatal(e.Start(":8080"))
}