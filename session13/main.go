package main

import (
	"myapp/router"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	router.StartRouter(e)
	e.Logger.Fatal(e.Start(":1323"))
}