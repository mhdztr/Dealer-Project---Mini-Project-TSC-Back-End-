# VEHICLE DEALER 

This project provides an API for managing a car and bike dealership system using JavaScript and Node.js with an Express server and MySQL database. 
It supports CRUD operations for managing car and bike data, allowing clients to retrieve, add, update, or delete vehicle entries.

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
Then copy this script to clone this repository into your system
``` bash
git clone https://github.com/mhdztr/Dealer-Project-With-Javascript--Mini-Project-TSC-Back-End.git
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

## updateCar ()
    to update car models based on serial ID

## getBike ()
    to retrieve all bike models on the database

## getIDBike ()
    to find car model based on serial ID

## getBrandBike ()
    to retrieve all bike models in the database based on brand

## addBike ()
    to add new bike model in the database

## removeBike ()
    to remove bike models from the database

## updateBike ()
    to update bike models on the database


# RUN
    to run and execute commands, type the aforementioned commands in your terminal
    
    Run server.js first and then client.js as a way to execute commands
    Or you can use Postman as a way to test the connection using:
    
    URL : http://localhost:3000/car-data to access car table in the database, or
    URL : http://localhost:3000/bike-data to access bike table in the database.
#

# API

### GET /car-data
Retrieve all car 

### GET /car-data/:id
Retrieve car based on ID (swap :id with car's serial ID)

### GET /car-data/brand/:brand
Retrieve car based on brand (swap :brand with car's brand)

### POST /car-data
To Add, type in
Body: 
``` json
{
    "serialID": "A109",
    "model": "GO Plus Panca",
    "brand": "Datsun",
    "car_type": "2100 cc","ava_status": "rent",
    "price": 2500000

```

### DELETE /car-data/:id
Remove car model on the database based on ID (swap :id with car's serial ID)

### PUT /car-data/:id
Update car model on the database based on ID (swap :id with car's serial ID)
To Update, type in
Body: 
``` json
{
    "model": "GO Plus Panca",
    "brand": "Datsun",
    "car_type": "2100 cc","ava_status": "rent",
    "price": 2500000
}
```

### GET /bike-data
Retrieve all bike

### GET /bike-data/:id
Retrieve bike based on ID (swap :id with bike's serial ID)

### GET /bike-data/brand/:brand
Retrieve bike based on brand (swap :brand with bike's brand)

### POST /bike-data
To Add, type in
Body: 
``` json
{
    "serialID": "B10112",
    "model": "Mio",
    "brand": "Yamaha",
    "bike_type": "110 cc",
    "ava_status": "sale",
    "price": 2000000
}
```

### DELETE /bike-data/:id
Remove bike model on the database based on ID (swap :id with bike's serial ID)

### PUT /bike-data/:id
Update bike model on the database based on ID (swap :id with bike's serial ID)
To Update, type in
Body: 
``` json
{
    "model": "Mio",
    "brand": "Yamaha",
    "bike_type": "110 cc",
    "ava_status": "sale",
    "price": 2000000
}
```


