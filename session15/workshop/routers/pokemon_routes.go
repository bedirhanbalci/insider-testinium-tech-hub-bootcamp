package routers

import (
	"database/sql"
	"workshop/handlers"
	"workshop/middleware"
	"workshop/services"

	"github.com/go-redis/redis/v8"
	"github.com/labstack/echo/v4"
)

func InitPokemonRoutes(e *echo.Echo, db *sql.DB, rdb *redis.Client) {
	pokemonService := services.NewPokemonService(db, rdb)
	
	pokemonHandler := handlers.NewPokemonHandler(pokemonService)

	e.POST("/pokemon", pokemonHandler.CreatePokemon, middleware.BasicAuthMiddleware())
	e.GET("/pokemon/:id", pokemonHandler.GetPokemon, middleware.BasicAuthMiddleware())
	e.GET("/pokemons", pokemonHandler.GetPokemons, middleware.BasicAuthMiddleware())
	e.PUT("/pokemon/:id", pokemonHandler.UpdatePokemon, middleware.BasicAuthMiddleware())
	e.DELETE("/pokemon/:id", pokemonHandler.DeletePokemon, middleware.BasicAuthMiddleware())
	e.POST("/pokemon/battle", pokemonHandler.BattlePokemon, middleware.BasicAuthMiddleware())
}
