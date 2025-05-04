CREATE DATABASE heroes_db;

\c heroes_db;

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    publisher_id INTEGER REFERENCES publishers(id) ON DELETE SET NULL
);

INSERT INTO publishers (name) VALUES
('Marvel'),
('DC');

INSERT INTO heroes (name, publisher_id) VALUES
('Homem-Aranha', 1),
('Batman', 2),
('Homem de Ferro', 1),
('Superman', 2),
('Mulher Maravilha', 2),
('Capitão América', 1);