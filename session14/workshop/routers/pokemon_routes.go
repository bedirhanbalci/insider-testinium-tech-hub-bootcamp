package routers

import (
	"workshop/handlers"
	"workshop/services"

	"github.com/labstack/echo/v4"
)

func InitPokemonRoutes(e *echo.Echo) {

	service := services.NewPostgresPokemonService()

	handler := handlers.NewPokemonHandler(service)

	e.POST("/pokemon", handler.CreatePokemon)
	e.GET("/pokemon/:id", handler.GetPokemon)
	e.GET("/pokemons", handler.GetPokemons)
	e.PUT("/pokemon/:id", handler.UpdatePokemon)
	e.DELETE("/pokemon/:id", handler.DeletePokemon)
	e.POST("/pokemon/battle/:id1/:id2", handler.BattlePokemon)
}
