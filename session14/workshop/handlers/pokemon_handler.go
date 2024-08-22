package handlers

import (
	"net/http"
	"workshop/models"
	"workshop/services"

	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
)

type PokemonHandler struct {
	service services.PokemonService
}

func NewPokemonHandler(service services.PokemonService) *PokemonHandler {
	return &PokemonHandler{service: service}
}

func parseUUID(c echo.Context, param string) (uuid.UUID, error) {
	id, err := uuid.Parse(c.Param(param))
	if err != nil {
		return uuid.Nil, err
	}
	return id, nil
}

func (h *PokemonHandler) CreatePokemon(c echo.Context) error {
	var pokemon models.Pokemon
	if err := c.Bind(&pokemon); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request payload"})
	}
	if err := c.Validate(&pokemon); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Validation failed: " + err.Error()})
	}
	createdPokemon, err := h.service.CreatePokemon(&pokemon)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to create Pokémon: " + err.Error()})
	}
	return c.JSON(http.StatusCreated, createdPokemon)
}


func (h *PokemonHandler) GetPokemon(c echo.Context) error {
	id, err := parseUUID(c, "id")
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid Pokémon ID"})
	}
	pokemon, err := h.service.GetPokemon(id)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Pokémon not found"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to retrieve Pokémon"})
	}
	return c.JSON(http.StatusOK, pokemon)
}

func (h *PokemonHandler) GetPokemons(c echo.Context) error {
	pokemons, err := h.service.GetPokemons()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to retrieve Pokémon list"})
	}
	return c.JSON(http.StatusOK, pokemons)
}

func (h *PokemonHandler) UpdatePokemon(c echo.Context) error {
	id, err := parseUUID(c, "id")
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid Pokémon ID"})
	}
	var pokemon models.Pokemon
	if err := c.Bind(&pokemon); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request payload"})
	}
	if err := c.Validate(&pokemon); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Validation failed: " + err.Error()})
	}
	updatedPokemon, err := h.service.UpdatePokemon(id, &pokemon)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Pokémon not found"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to update Pokémon"})
	}
	return c.JSON(http.StatusOK, updatedPokemon)
}

func (h *PokemonHandler) DeletePokemon(c echo.Context) error {
	id, err := parseUUID(c, "id")
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid Pokémon ID"})
	}
	if err := h.service.DeletePokemon(id); err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Pokémon not found"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to delete Pokémon"})
	}
	return c.NoContent(http.StatusNoContent)
}

func (h *PokemonHandler) BattlePokemon(c echo.Context) error {
	id1, err := parseUUID(c, "id1")
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid Pokémon ID 1"})
	}
	id2, err := parseUUID(c, "id2")
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid Pokémon ID 2"})
	}
	pokemon1, err := h.service.GetPokemon(id1)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Pokémon 1 not found"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to retrieve Pokémon 1"})
	}
	pokemon2, err := h.service.GetPokemon(id2)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Pokémon 2 not found"})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to retrieve Pokémon 2"})
	}
	winner, err := h.service.BattlePokemon(pokemon1, pokemon2)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Battle failed: " + err.Error()})
	}
	if winner == nil {
		return c.JSON(http.StatusOK, map[string]string{"message": "The battle ended in a draw"})
	}
	return c.JSON(http.StatusOK, winner)
}
