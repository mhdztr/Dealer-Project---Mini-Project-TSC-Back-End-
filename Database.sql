CREATE DATABASE IF NOT EXISTS dealerproject;

USE dealerproject;

CREATE TABLE car_data (
    serialID varchar (24) primary key,
    model varchar (500) NOT NULL,
    brand varchar (500) NOT NULL,
    car_type varchar (64) NOT NULL,
    ava_status ENUM('sale', 'rent') NOT NULL,
    price int NOT NULL,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bike_data (
    serialID varchar (24) primary key,
    model varchar (500) NOT NULL,
    brand varchar (500) NOT NULL,
    bike_type varchar (64) NOT NULL,
    ava_status ENUM('sale', 'rent') NOT NULL,
    price int NOT NULL,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);