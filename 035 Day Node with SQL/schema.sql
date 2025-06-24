CREATE TABLE ruma (
    id VARCHAR(50) Primary Key,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);