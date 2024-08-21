package services

import (
	"errors"
	"workshop/models"

	"github.com/google/uuid"
)

var (
	ErrNotFound = errors.New("Pokemon not found")
)

type PokemonService interface {
	CreatePokemon(pokemon *models.Pokemon) (*models.Pokemon, error)
	GetPokemon(id uuid.UUID) (*models.Pokemon, error)
	GetPokemons() ([]models.Pokemon, error)
	UpdatePokemon(id uuid.UUID, pokemon *models.Pokemon) (*models.Pokemon, error)
	DeletePokemon(id uuid.UUID) error
}


type inMemoryPokemonService struct {
	pokemons map[uuid.UUID]models.Pokemon
}

func NewInMemoryPokemonService() PokemonService {
	return &inMemoryPokemonService{
		pokemons: make(map[uuid.UUID]models.Pokemon),
	}
}

func (s *inMemoryPokemonService) CreatePokemon(pokemon *models.Pokemon) (*models.Pokemon, error) {
	pokemon.UUID = uuid.New()
	s.pokemons[pokemon.UUID] = *pokemon
	return pokemon, nil
}

func (s *inMemoryPokemonService) GetPokemon(id uuid.UUID) (*models.Pokemon, error) {
	pokemon, exists := s.pokemons[id]
	if !exists {
		return nil, ErrNotFound
	}
	return &pokemon, nil
}

func (s *inMemoryPokemonService) GetPokemons() ([]models.Pokemon, error) {
	pokemons := make([]models.Pokemon, 0, len(s.pokemons))
	for _, pokemon := range s.pokemons {
		pokemons = append(pokemons, pokemon)
	}
	return pokemons, nil
}

func (s *inMemoryPokemonService) UpdatePokemon(id uuid.UUID, pokemon *models.Pokemon) (*models.Pokemon, error) {
	_, exists := s.pokemons[id]
	if !exists {
		return nil, ErrNotFound
	}
	pokemon.UUID = id
	s.pokemons[id] = *pokemon
	return pokemon, nil
}

func (s *inMemoryPokemonService) DeletePokemon(id uuid.UUID) error {
	_, exists := s.pokemons[id]
	if !exists {
		return ErrNotFound
	}
	delete(s.pokemons, id)
	return nil
}