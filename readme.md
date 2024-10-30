# VEHICLE DEALER 

This project provides an API for managing a car and bike dealership system using JavaScript and Node.js with an Express server and MySQL database. It supports CRUD operations for managing car and bike data, allowing clients to retrieve, add, update, or delete vehicle entries.

# FEATURES
- CRUD Operations: Create, read, update, and delete operations for both cars and bikes.
- Filter Data by ID or Brand: Retrieve vehicles based on specific IDs or brands.

# INSTALLATION 

Before cloning this github repostory, make sure you run this code on your desired terminal to install some dependencies:

``` bash
npm install
npm i express
npm i mysql2
npm i moment
npm i node-fetch
npm i prompt-sync
```

Create a connection with your MySQL using SQLTools or any of your desired SQL Connectors

``` bash
const db = mysql.createPool({
    host: 'localhost', 
    user: 'zakki', //Change the value based on your MySQL Username
    password: 'zakki', // Change the value bases on yoyr MySQL Password
    database: 'dealerproject' // Make sure you run the script on database.sql to generate the appropriate database on your system
});
```

Run the Application by running these command on your terminals
``` bash
node server.js // to run your server based on localhost:3000
node client.js // to run the client which execute the commands
```

# FUNCTIONS

## getCar ()
    to retrieve all car models in the database

## getIDCar ()
    to find car model based on Serial ID

## getBrandCar ()
    to retrieve all car models in the database based on brand 

## addCar ()
    to add new car models into the database

## removeCar ()
    to remove car models from the database

## updateCar
