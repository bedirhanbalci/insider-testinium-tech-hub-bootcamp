package database

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var db *sql.DB

func InitPostgreSQL() (*sql.DB, error) {
	var err error

	dsn := "user=postgres password=test dbname=insider-bootcamp host=127.0.0.1 port=5432 sslmode=disable"
	db, err = sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal(err)
	}

	if err := db.Ping(); err != nil {
		log.Fatal(err)
	}

	return db, nil
}