package router

import (
	"myapp/handlers"

	"github.com/labstack/echo/v4"
)

func StartRouter(e *echo.Echo) {
	e.GET("/", handlers.GetHello)
	e.GET("/:name", handlers.GetName)
	e.POST("/create", handlers.CreateUser)
}