package handlers

import (
	"net/http"
	"workshop/models"
	"workshop/services"

	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
)

type PokemonHandler struct {
	Service services.PokemonService
}

func (h *PokemonHandler) CreatePokemon(c echo.Context) error {
	pokemon := new(models.Pokemon)
	if err := c.Bind(pokemon); err!= nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	createdPokemon, err := h.Service.CreatePokemon(pokemon)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusCreated, createdPokemon)
}

func (h *PokemonHandler) GetPokemon(c echo.Context) error {
	id, err := uuid.Parse(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, "Invalid UUID format")
	}
	pokemon, err := h.Service.GetPokemon(id)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, "Pokemon not found")
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
		
	}
	return c.JSON(http.StatusOK, pokemon)
}

func(h *PokemonHandler) GetPokemons(c echo.Context) error {
	pokemons, err := h.Service.GetPokemons()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, pokemons)
}

func (h *PokemonHandler) UpdatePokemon(c echo.Context) error {
	id, err := uuid.Parse(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, "Invalid UUID format")
	}
	pokemon := new(models.Pokemon)
	if err := c.Bind(pokemon); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	updatedPokemon, err := h.Service.UpdatePokemon(id, pokemon)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, "Pokemon not found")
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, updatedPokemon)
}

func (h *PokemonHandler) DeletePokemon(c echo.Context) error {
	id, err := uuid.Parse(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, "Invalid UUID format")
	}
	err = h.Service.DeletePokemon(id)
	if err != nil {
		if err == services.ErrNotFound {
			return c.JSON(http.StatusNotFound, "Pokemon not found")
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.NoContent(http.StatusNoContent)
}