package models

import "github.com/google/uuid"

type Pokemon struct {
	UUID  uuid.UUID `json:"uuid"`
	Name  string    `json:"name"`
	Type  string	`json:"type"`
	Level int      `json:"level"`
}