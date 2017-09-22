DROP DATABASE IF EXISTS todosql; 

CREATE DATABASE todosql; 

\c 

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL, 
    status BOOLEAN DEFAULT false
)

