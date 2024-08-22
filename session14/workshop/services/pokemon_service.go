package services

import (
	"errors"
	"fmt"
	"workshop/database"
	"workshop/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

var (
	ErrNotFound = errors.New("Pokémon not found")
)

type PokemonService interface {
	CreatePokemon(pokemon *models.Pokemon) (*models.Pokemon, error)
	GetPokemon(id uuid.UUID) (*models.Pokemon, error)
	GetPokemons() ([]models.Pokemon, error)
	UpdatePokemon(id uuid.UUID, pokemon *models.Pokemon) (*models.Pokemon, error)
	DeletePokemon(id uuid.UUID) error
	BattlePokemon(pokemon1, pokemon2 *models.Pokemon) (*models.Pokemon, error)
}

type postgresPokemonService struct {
	db *gorm.DB
}

func NewPostgresPokemonService() PokemonService {
	return &postgresPokemonService{db: database.DB}
}

func (s *postgresPokemonService) CreatePokemon(pokemon *models.Pokemon) (*models.Pokemon, error) {
	if err := s.db.Create(pokemon).Error; err != nil {
		return nil, fmt.Errorf("failed to create Pokémon: %w", err)
	}
	return pokemon, nil
}

func (s *postgresPokemonService) GetPokemon(id uuid.UUID) (*models.Pokemon, error) {
	var pokemon models.Pokemon
	if err := s.db.First(&pokemon, "id = ?", id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, ErrNotFound
		}
		return nil, fmt.Errorf("failed to retrieve Pokémon: %w", err)
	}
	return &pokemon, nil
}

func (s *postgresPokemonService) GetPokemons() ([]models.Pokemon, error) {
	var pokemons []models.Pokemon
	if err := s.db.Find(&pokemons).Error; err != nil {
		return nil, fmt.Errorf("failed to retrieve Pokémon list: %w", err)
	}
	return pokemons, nil
}

func (s *postgresPokemonService) UpdatePokemon(id uuid.UUID, updatedPokemon *models.Pokemon) (*models.Pokemon, error) {
	var pokemon models.Pokemon
	if err := s.db.First(&pokemon, "id = ?", id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, ErrNotFound
		}
		return nil, fmt.Errorf("failed to retrieve Pokémon for update: %w", err)
	}

	if err := s.db.Model(&pokemon).Updates(updatedPokemon).Error; err != nil {
		return nil, fmt.Errorf("failed to update Pokémon: %w", err)
	}
	return &pokemon, nil
}

func (s *postgresPokemonService) DeletePokemon(id uuid.UUID) error {
	if err := s.db.Delete(&models.Pokemon{}, "id = ?", id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return ErrNotFound
		}
		return fmt.Errorf("failed to delete Pokémon: %w", err)
	}
	return nil
}

func (s *postgresPokemonService) BattlePokemon(pokemon1, pokemon2 *models.Pokemon) (*models.Pokemon, error) {
	if pokemon1.HP <= 0 || pokemon2.HP <= 0 {
		return nil, errors.New("one of the Pokémon has no health left")
	}

	damage1 := pokemon1.Attack - pokemon2.Defense/2
	if damage1 < 0 {
		damage1 = 1
	}

	damage2 := pokemon2.Attack - pokemon1.Defense/2
	if damage2 < 0 {
		damage2 = 1
	}

	pokemon1.ReduceHP(damage2)
	pokemon2.ReduceHP(damage1)

	if !pokemon1.IsAlive() && !pokemon2.IsAlive() {
		return nil, errors.New("both Pokémon fainted")
	} else if !pokemon1.IsAlive() {
		return pokemon2, nil
	} else if !pokemon2.IsAlive() {
		return pokemon1, nil
	}

	return nil, nil
}
