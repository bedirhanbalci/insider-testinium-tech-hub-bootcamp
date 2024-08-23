package services

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"workshop/models"

	"github.com/go-redis/redis/v8"
	"github.com/google/uuid"
)

var (
	ErrNotFound = errors.New("Pokémon not found")
)

type PokemonService struct {
	db  *sql.DB
	rdb *redis.Client
}

func NewPokemonService(db *sql.DB, rdb *redis.Client) *PokemonService {
	return &PokemonService{db: db, rdb: rdb}
}

func (s *PokemonService) CreatePokemon(pokemon *models.Pokemon) (*models.Pokemon, error) {
	if pokemon.ID == uuid.Nil {
		pokemon.ID = uuid.New()
	}

	query := `INSERT INTO pokemons (id, name, type, level, hp, attack, defense, speed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
	_, err := s.db.Exec(query, pokemon.ID, pokemon.Name, pokemon.Type, pokemon.Level, pokemon.HP, pokemon.Attack, pokemon.Defense, pokemon.Speed)
	if err != nil {
		return nil, fmt.Errorf("failed to create Pokémon: %w", err)
	}
	return pokemon, nil
}

func (s *PokemonService) GetPokemon(id uuid.UUID) (*models.Pokemon, error) {
	ctx := context.Background()
	var pokemon models.Pokemon
	cacheKey := fmt.Sprintf("pokemon:%s", id.String())

	cachedPokemon, err := s.rdb.Get(ctx, cacheKey).Result()
	if err == redis.Nil {
		query := `SELECT id, name, type, level, hp, attack, defense, speed FROM pokemons WHERE id = $1`
		row := s.db.QueryRow(query, id)
		err := row.Scan(&pokemon.ID, &pokemon.Name, &pokemon.Type, &pokemon.Level, &pokemon.HP, &pokemon.Attack, &pokemon.Defense, &pokemon.Speed)
		if err != nil {
			if err == sql.ErrNoRows {
				return nil, ErrNotFound
			}
			return nil, fmt.Errorf("failed to retrieve Pokémon: %w", err)
		}

		pokemonJSON, _ := json.Marshal(pokemon)
		s.rdb.Set(ctx, cacheKey, pokemonJSON, 5*time.Minute)
		return &pokemon, nil
	} else if err != nil {
		return nil, fmt.Errorf("failed to get Pokémon from cache: %w", err)
	}

	json.Unmarshal([]byte(cachedPokemon), &pokemon)
	return &pokemon, nil
}

func (s *PokemonService) GetPokemons() ([]models.Pokemon, error) {
	var pokemons []models.Pokemon
	query := `SELECT id, name, type, level, hp, attack, defense, speed FROM pokemons`
	rows, err := s.db.Query(query)
	if err != nil {
		return nil, fmt.Errorf("failed to retrieve Pokémon list: %w", err)
	}
	defer rows.Close()

	for rows.Next() {
		var pokemon models.Pokemon
		if err := rows.Scan(&pokemon.ID, &pokemon.Name, &pokemon.Type, &pokemon.Level, &pokemon.HP, &pokemon.Attack, &pokemon.Defense, &pokemon.Speed); err != nil {
			return nil, fmt.Errorf("failed to scan Pokémon: %w", err)
		}
		pokemons = append(pokemons, pokemon)
	}
	return pokemons, nil
}

func (s *PokemonService) UpdatePokemon(id uuid.UUID, updatedPokemon *models.Pokemon) (*models.Pokemon, error) {
	query := `UPDATE pokemons SET name = $1, type = $2, level = $3, hp = $4, attack = $5, defense = $6, speed = $7 WHERE id = $8`
	_, err := s.db.Exec(query, updatedPokemon.Name, updatedPokemon.Type, updatedPokemon.Level, updatedPokemon.HP, updatedPokemon.Attack, updatedPokemon.Defense, updatedPokemon.Speed, id)
	if err != nil {
		return nil, fmt.Errorf("failed to update Pokémon: %w", err)
	}

	ctx := context.Background()
	cacheKey := fmt.Sprintf("pokemon:%s", id.String())
	updatedPokemonJSON, _ := json.Marshal(updatedPokemon)
	s.rdb.Set(ctx, cacheKey, updatedPokemonJSON, 5*time.Minute)

	return updatedPokemon, nil
}

func (s *PokemonService) DeletePokemon(id uuid.UUID) error {
	query := `DELETE FROM pokemons WHERE id = $1`
	_, err := s.db.Exec(query, id)
	if err != nil {
		return fmt.Errorf("failed to delete Pokémon: %w", err)
	}

	ctx := context.Background()
	cacheKey := fmt.Sprintf("pokemon:%s", id.String())
	s.rdb.Del(ctx, cacheKey)

	return nil
}

func (s *PokemonService) BattlePokemon(pokemon1, pokemon2 *models.Pokemon) (*models.Pokemon, error) {
	pokemon1Strength := pokemon1.Attack + pokemon1.Level
	pokemon2Strength := pokemon2.Attack + pokemon2.Level

	if pokemon1Strength > pokemon2Strength {
		return pokemon1, nil
	}
	return pokemon2, nil
}
