import express from 'express';
import mysql from 'mysql2/promise';

// Server will start on localhost:3000
const PORT = 3000; 

const app = express();
app.use(express.json());

// MySQL Connnection
const db = mysql.createPool({
    host: 'localhost', 
    user: 'zakki', // Change the value based on your MySQL Username
    password: 'zakki', // Change the value bases on yoyr MySQL Password
    database: 'dealerproject' // Make sure you run the script on database.sql to generate the appropriate database on your system
});

// Car Data ======================================================================
// (R) Read and retrieve car-data to user 
app.get('/car-data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM car_data');
        res.json(rows);
    } catch (error) {
        console.error('Error retrieving available car data:', error);
        res.status(404).json({ error: 'Oops! Looks like our cars took a wrong turn. Try again later!' });
    }
});

// (R) Read and retrieve car-data based on serialID inputted by user
app.get ('/car-data/:id', async (req, res) => {
    const { id: serialID } = req.params;
    try {
        const [rows] = await db.query('SELECT * from car_data where serialID = ?', [serialID]);
        if (rows.length === 0) {
            res.status(303).json({ error: `The car with that specific id (${serialID}) is not in our garage` });
        } else {
            res.json(rows);
        }
    } catch (error) {
        console.error('Error filtering car:', error);
        res.status(400).json({ error: 'Seems like the car with that ID is unregistered.' });
    }
});

// (R) Read and retrieve car-data based on brand inputted by user
app.get ('/car-data/brand/:brand', async (req, res) => {
    const { brand } = req.params;
    try {
        const [rows] = await db.query('SELECT * from car_data where brand = ?', [brand]);
        if (rows.length === 0) {
            res.status(303).json({ error: `The car with that specific brand (${brand}) is not in our garage` });
        } else {
            res.json(rows);
        }
    } catch (error) {
        console.error('Error deleting car:', error);
        res.status(400).json({ error: 'The garage containing that brand of car refused to be opened.\nTry again later!' });
    }
});

// (D) Delete car-data based on serialID
app.delete('/car-data/:id', async (req, res) => {
    const { id: serialID } = req.params;
    try {
        const [remove] = await db.query('DELETE FROM car_data WHERE serialID = ?', [serialID]);
        if (remove.affectedRows === 0) {
            res.status(303).json({ error: `The car with that specific ID (${serialID}) is not in our garage` });
        } else {
            res.json({ serialID });
        }
    } catch (error) {
        console.error('Error deleting car:', error);
        res.status(202).json({ error: 'The car is glued to the garage, we cannot take it out at the moment.\nTry again later!' });
    }
});

// (C) Create car-model by user input
app.post('/car-data', async (req, res) => {
    const { serialID, model, brand, car_type, ava_status, price } = req.body;

    try {
        const [output] = await db.query(
            'INSERT INTO car_data (serialID, model, brand, car_type, ava_status, price) VALUES (?, ?, ?, ?, ?, ?)',
            [serialID, model, brand, car_type, ava_status, price]
        );
        res.json({ message: 'Car added successfully!', serialID });
    } catch (error) {
        console.error('Error adding cars to the database:', error);
        res.status(606).json({ error: 'Well it seems our garage door is jammed. Give it another shot, but harder!' });
    }
});

// (U) Update car based on seriallID
app.put('/car-data/:id', async (req, res) => {
    const { id: serialID } = req.params;
    const { model, brand, car_type, ava_status, price } = req.body;

    try {
        const [modify] = await db.query(
            'UPDATE car_data SET model = ?, brand = ?, car_type = ?, ava_status = ?, price = ? WHERE serialID = ?',
            [model, brand, car_type, ava_status, price, serialID]
        );
        if (modify.affectedRows === 0) {
            res.status(707).json({ error: `The car with that specific ID (${serialID}) is not in our garage` });
        } else {
            res.json({ serialID, model, brand, car_type, ava_status, price });
        }
    } catch (error) {
        console.error('Error modifying car data:', error);
        res.status(808).json({ error: 'Oops, our mechanic is on strike right now, try again later!' });
    }
});


// Bike Data ==============================================================================
// (R) Read and retrieve bike-data to user
app.get('/bike-data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM bike_data');
        res.json(rows);
    } catch (error) {
        console.error('Error retrieving available bikes data:', error);
        res.status(606).json({ error: 'Seems like the bikes are going somewhere. Be sure to try again!' });
    }
});

// (R) Read and retrieve bike-data based on serialID inputted by user
app.get ('/bike-data/:id', async (req, res) => {
    const { id: serialID } = req.params;
    try {
        const [rows] = await db.query('SELECT * from bike_data where serialID = ?', [serialID]);
        if (rows.length === 0) {
            res.status(303).json({ error: `The bike with that specific id (${serialID}) is not in our garage` });
        } else {
            res.json(rows);
        }
    } catch (error) {
        console.error('Error filtering bike:', error);
        res.status(400).json({ error: 'Seems like the bike with that ID is unregistered.' });
    }
});

// (R) Read and retrieve bike-data based on brand inputted by user
app.get ('/bike-data/brand/:brand', async (req, res) => {
    const { brand } = req.params;
    try {
        const [rows] = await db.query('SELECT * from bike_data where brand = ?', [brand]);
        if (rows.length === 0) {
            res.status(303).json({ error: `The bike with that specific brand (${brand}) is not in our garage` });
        } else {
            res.json(rows);
        }
    } catch (error) {
        console.error('Error deleting bike:', error);
        res.status(400).json({ error: 'The garage containing that brand of bike refused to be opened.\nTry again later!' });
    }
});

// (D) Delete and remove bike-data based on serialID
app.delete('/bike-data/:id', async (req, res) => {
    const { id: serialID } = req.params;
    try {
        const [remove] = await db.query('DELETE FROM bike_data WHERE serialID = ?', [serialID]);
        if (remove.affectedRows === 0) {
            res.status(303).json({ error: `The bike with that specific ID (${serialID}) is not in our garage` });
        } else {
            res.json({ serialID });
        }
    } catch (error) {
        console.error('Error deleting bike:', error);
        res.status(202).json({ error: 'The bike is currently locked by the lord himself.\nTry again later!' });
    }
});

// (C) Create or Add new bike model 
app.post('/bike-data', async (req, res) => {
    const { serialID, model, brand, bike_type, ava_status, price } = req.body;

    try {
        const [output] = await db.query(
            'INSERT INTO bike_data (serialID, model, brand, bike_type, ava_status, price) VALUES (?, ?, ?, ?, ?, ?)',
            [serialID, model, brand, bike_type, ava_status, price]
        );
        res.json({ message: 'Bike added successfully!', serialID });
    } catch (error) {
        console.error('Error adding bikes to the database:', error);
        res.status(606).json({ error: 'The boulard refused to go down. Try again later' });
    }
});

// (C) Update bike data based on serialID
app.put('/bike-data/:id', async (req, res) => {
    const { id: serialID } = req.params;
    const { model, brand, bike_type, ava_status, price } = req.body;

    try {
        const [modify] = await db.query(
            'UPDATE bike_data SET model = ?, brand = ?, bike_type = ?, ava_status = ?, price = ? WHERE serialID = ?',
            [model, brand, bike_type, ava_status, price, serialID]
        );
        if (modify.affectedRows === 0) {
            res.status(707).json({ error: `The bike with that specific ID (${serialID}) is not in our garage` });
        } else {
            res.json({ serialID, model, brand, bike_type, ava_status, price });
        }
    } catch (error) {
        console.error('Error modifying bike data:', error);
        res.status(808).json({ error: 'Oops, our mechanic is on strike right now, try again later!' });
    }
});

// Test connection on localhost:3000
app.listen(PORT, () => {
    console.log(`API successfully operated on http://localhost:${PORT} :3`);
});
