package models

import (
	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)

type Pokemon struct {
	ID       uuid.UUID `json:"id"`
	Name     string    `json:"name" validate:"required"`
	Type     string    `json:"type" validate:"required"`
	Level    int       `json:"level" validate:"required,min=1,max=100"`
	HP       int       `json:"hp" validate:"required,min=1"`
	Attack   int       `json:"attack" validate:"required,min=1"`
	Defense  int       `json:"defense" validate:"required,min=1"`
	Speed    int       `json:"speed" validate:"required,min=1"`
}

type CustomValidator struct {
	Validator *validator.Validate
}

func (cv *CustomValidator) Validate(i interface{}) error {
	return cv.Validator.Struct(i)
}

func (p *Pokemon) Validate() error {
	validate := validator.New()
	return validate.Struct(p)
}

func (p *Pokemon) ReduceHP(amount int) {
	if amount > 0 {
		p.HP -= amount
		if p.HP < 0 {
			p.HP = 0
		}
	}
}

func (p *Pokemon) IsAlive() bool {
	return p.HP > 0
}
