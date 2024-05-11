CREATE DATABASE web_shop;
\c web_shop

CREATE TABLE product(
    id bigserial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    count BIGINT NOT NULL,
    description TEXT,
    category VARCHAR(255)
);
CREATE TABLE product_photo(
    id bigserial PRIMARY KEY,
    url VARCHAR(255),
    id_product BIGINT REFERENCES product(id)
);
CREATE TABLE users(
    id bigserial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);
CREATE TABLE cart(
    id bigserial PRIMARY KEY,
    id_users BIGINT REFERENCES users(id),
    count BIGINT NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    date DATE NOT NULL
);
CREATE TABLE cart_product(
    id_product BIGINT REFERENCES product(id),
    id_cart BIGINT REFERENCES cart(id)
);