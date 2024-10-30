import fetch from 'node-fetch';
import promptSync from 'prompt-sync';

const cmmd = promptSync();
const reference = "http://localhost:3000";


async function getCar() {
    try {
        const fback = await fetch (`${reference}/car-data`);
        const car = await fback.json();

        console.log ("\nAVAILABLE CAR DATA WITH BRAND ");
        car.forEach ((car) => {
            console.log (`\nSerial ID\t= ${car.serialID}, \nModel\t\t= ${car.model}, \nBrand\t\t= ${car.brand}, \nType\t\t= ${car.car_type}, \nStatus\t\t= ${car.ava_status}, \nPrice\t\t= ${car.price}`);
        });
    }
    catch (error) {
        console.error('There is an error retrieving available car data:', error);
    }
}

async function getIDCar() {
    const serialID = cmmd("Enter car ID that you want to find: ");
    try {
        const fback = await fetch (`${reference}/car-data/${serialID}`);
        const IDCar = await fback.json();

        console.log (`\nCAR MODEL WITH ID: (${serialID})`);
        IDCar.forEach ((IDCar) => {
        console.log (`\nSerial ID\t= ${IDCar.serialID}, \nModel\t\t= ${IDCar.model}, \nBrand\t\t= ${IDCar.brand}, \nType\t\t= ${IDCar.car_type}, \nStatus\t\t= ${IDCar.ava_status}, \nPrice\t\t= ${IDCar.price}`);
        });
        
    }
    catch (error) {
        console.error('There is an error retrieving car model by ID:', error);
    }
}

async function getBrandCar() {
        const brand = cmmd("Enter car brand that you want to filter: ");
        try {
            const fback = await fetch (`${reference}/car-data/brand/${brand}`);
            const brandCar = await fback.json();

            console.log (`\nAVAILABLE ${brand} CAR:`);
            brandCar.forEach ((brandCar) => {
            console.log (`\nSerial ID\t= ${brandCar.serialID}, \nModel\t\t= ${brandCar.model}, \nBrand\t\t= ${brandCar.brand}, \nType\t\t= ${brandCar.car_type}, \nStatus\t\t= ${brandCar.ava_status}, \nPrice\t\t= ${brandCar.price}`);
            });
            
        }
        catch (error) {
            console.error('There is an error retrieving available car data by brand:', error);
        }
}
async function addCar() {
    const serialID = cmmd(" Enter serial number or new ID\t: ");
    const model = cmmd(" Input car model\t: ");
    const brand = cmmd(" Input brand name\t: ");
    const car_type = cmmd(" Input car type/cc\t: ");
    const ava_status = cmmd (" Input car status (sale/rent)\t: ");
    const price = parseInt(cmmd (" Input car pricing\t: "));

    try {
        const fback = await fetch (`${reference}/car-data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({serialID, model, brand, car_type, ava_status, price}),
        });
        const newCar = await fback.json();
        console.log("New car successfully added!");
    }
    catch (error) {
        console.error("Error adding the car into the database: ", error);
    }
}

async function removeCar () {
    console.log ("Which car do you wish to remove?")
    const serialID = cmmd("Enter the car Serial ID you wish to remove: ");
    try {
        const fback = await fetch (`${reference}/car-data/${serialID}`, {
            method: "delete",
        });
        const exCar = await fback.json();
        console.log (`Car with Serial ID ${serialID} successfully removed`);
    }
    catch (error) {
        console.error ("Error removing the specific car", error);
    }
}

async function updateCar () {
    const serialID = cmmd("Enter the car Serial ID you wish to update: ");
    const model = cmmd(" Input new car model\t: ");
    const brand = cmmd(" Input new brand name\t: ");
    const car_type = cmmd(" Input new car type/cc\t: ");
    const ava_status = cmmd (" Input new car status (sale/rent)\t: ");
    const price = parseInt(cmmd (" Input new car pricing\t: "));

    try {
        const fback = await fetch (`${reference}/car-data/${serialID}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({serialID, model, brand, car_type, ava_status, price}),
        });
        const updCar = await fback.json ();
        console.log('Car data successfully updated');
    }
    catch (error) {
        console.error("Error updating the specific car", error);
    }
}



// Bike data ==========================================================

async function getBike() {
    try {
        const fback = await fetch (`${reference}/bike-data`);
        const bike = await fback.json();

        console.log ("AVAILABLE BIKE DATA");
        bike.forEach((bike) => {
            console.log (`Serial ID\t= ${bike.serialID}\nModel\t\t= ${bike.model} \nBrand\t\t= ${bike.brand}, \nType\t\t= ${bike.bike_type}, \nStatus\t\t= ${bike.ava_status}, \nPrice\t\t= ${bike.price}\n`);
        });
    }
    catch (error) {
        console.error('There is an error retrieving available car data:', error);
    }
}

async function getIDBike() {
    const serialID = cmmd("Enter bike ID that you want to find: ");
    try {
        const fback = await fetch (`${reference}/bike-data/${serialID}`);
        const IDBike = await fback.json();

        console.log (`\nBIKE MODEL WITH ID: (${serialID})`);
        IDBike.forEach ((IDBike) => {
        console.log (`\nSerial ID\t= ${IDBike.serialID}, \nModel\t\t= ${IDBike.model}, \nBrand\t\t= ${IDBike.brand}, \nType\t\t= ${IDBike.bike_type}, \nStatus\t\t= ${IDBike.ava_status}, \nPrice\t\t= ${IDBike.price}`);
        });
        
    }
    catch (error) {
        console.error('There is an error retrieving car model by ID:', error);
    }
}

async function getBrandBike() {
    const brand = cmmd("Enter bike brand that you want to filter: ");
    try {
        const fback = await fetch (`${reference}/bike-data/brand/${brand}`);
        const brandBike = await fback.json();

        console.log (`\nAVAILABLE ${brand} BIKE:`);
        brandBike.forEach ((brandBike) => {
        console.log (`\nSerial ID\t= ${brandBike.serialID}, \nModel\t\t= ${brandBike.model}, \nBrand\t\t= ${brandBike.brand}, \nType\t\t= ${brandBike.bike_type}, \nStatus\t\t= ${brandBike.ava_status}, \nPrice\t\t= ${brandBike.price}`);
        });
        
    }
    catch (error) {
        console.error('There is an error retrieving available car data by brand:', error);
    }
}

async function addBike() {
    const serialID = cmmd(" Enter serial number or new ID\t: ");
    const model = cmmd(" Input bike model\t: ");
    const brand = cmmd(" Input brand name\t: ");
    const bike_type = cmmd(" Input bike type/cc\t: ");
    const ava_status = cmmd (" Input bike status (sale/rent)\t: ");
    const price = parseInt(cmmd (" Input bike pricing\t: "));

    try {
        const fback = await fetch (`${reference}/bike-data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({serialID, model, brand, bike_type, ava_status, price}),
        });
        const newBike = await fback.json();
        console.log("New bike successfully added!");
    }
    catch (error) {
        console.error("Error adding the bike into the database: ", error);
    }
}

async function removeBike() {
    console.log("Which bike do you wish to remove?");
    const serialID = cmmd("Enter the bike Serial ID you wish to remove: ");
    try {
        const fback = await fetch (`${reference}/bike-data/${serialID}`, {
            method: "DELETE",
        });
        const exBike = await fback.json();
        console.log(`Bike with Serial ID ${serialID} removed successfully.`);
    }
    catch (error) {
        console.error("Error removing the specific bike", error);
    }
}

async function updateBike() {
    const serialID = cmmd("Enter the bike Serial ID you wish to update: ");
    const model = cmmd(" Input new bike model\t: ");
    const brand = cmmd(" Input new brand name\t: ");
    const bike_type = cmmd(" Input new bike type/cc\t: ");
    const ava_status = cmmd (" Input new bike status (sale/rent)\t: ");
    const price = parseInt(cmmd (" Input new bike pricing\t: "));

    try {
        const fback = await fetch (`${reference}/bike-data/${serialID}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({serialID, model, brand, bike_type, ava_status, price}),
        });
        const updBike = await fback.json();
        console.log("Bike data successfully updated");
    }
    catch (error) {
        console.error("Error updating the specific bike", error);
    }
}
async function bikeDealer() {
    console.log("\nBike Dealer Options:");
    console.log("1. Add Bike");
    console.log("2. Remove Bike");
    console.log("3. Update Bike");
    console.log("4. View Bikes Data");
    console.log("5. Find Bike by ID");
    console.log("6. Filter Bikes by Brand");
    console.log("7. Go back\n");

    const service = cmmd("Choose an option: ");
    
    switch (service) {
        case '1':
            await addBike();
            break;
        case '2':
            await removeBike();
            break;
        case '3':
            await updateBike();
            break;
        case '4':
            await getBike(); 
            break;
        case '5':
            await getIDBike();
            break;
        case '6':
            await getBrandBike();
            break;
        case '7':
            console.log("Returning to main menu...");
            await entdealer();
            break;
        default:
            console.log("Invalid option.");
    }
}

async function carDealer() {
    console.log("\nCar Dealer Options:");
    console.log("1. Add Car");
    console.log("2. Remove Car");
    console.log("3. Update Car");
    console.log("4. View Cars");
    console.log("5. Find Car by ID");
    console.log("6. Filter Cars by Brand");
    console.log("7. Go back\n");

    const service = cmmd("Choose an option: ");
    
    switch (service) {
        case '1':
            await addCar();
            break;
        case '2':
            await removeCar();
            break;
        case '3':
            await updateCar();
            break;
        case '4':
            await getCar();
            break;
        case '5':
            await getIDCar();
            break;
        case '6':
            await getBrandCar();
            break;
        case '7':
            console.log("Returning to main menu...");
            await entdealer();
            break;
        default:
            console.log("Invalid option.");
    }
}

async function entdealer() {
    console.log("\nCar & Bike Dealer API");
    console.log("1. Bike Dealer");
    console.log("2. Car Dealer");
    console.log("3. Exit Program");

    const service = cmmd("Choose an option: ");

    if (service === '1') {
        await bikeDealer();
    } else if (service === '2') {
        await carDealer();
    } else if (service === '3') {
        console.log("Exiting the program...");
    } else {
        console.log("Invalid option. Please select either 1, 2, or 3.");
    }
}

entdealer();