DROP TABLE scores CASCADE;

CREATE TABLE scores(
	id SERIAL PRIMARY KEY,
	name VARCHAR,
	email VARCHAR,
	preference VARCHAR,
	score INT
)

