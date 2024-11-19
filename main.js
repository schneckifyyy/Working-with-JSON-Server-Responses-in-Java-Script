'use strict';

// Define Location class
class Location {
    constructor(ObjectID, ID, Location, Bezirk, Adresse, TelefonNummer, Email, Weblink) {
        this.ObjectID = ObjectID;
        this.ID = ID;
        this.Location = Location;
        this.Bezirk = Bezirk;
        this.Adresse = Adresse;
        this.TelefonNummer = TelefonNummer;
        this.Email = Email;
        this.Weblink = Weblink;
    }
}

// Fetch data function
async function fetchData() {
    const response = await fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json');
    const data = await response.json();
    return data.features.map(feature => feature.properties); // Extract `properties`
}

// DOM elements
let locationButton = document.getElementById("LocationButton");
let locationDiv = document.getElementById("location");

// Function to display a random location
async function printRndLocation() {
    const locations = await fetchData(); // Wait for the data to be fetched
    let rnd = Math.floor(Math.random() * locations.length); // Get a random index
    let location = locations[rnd];

    // Create a new Location object using named properties
    let loc = new Location(
        location.OBJECTID,
        location.ID,
        location.LOCATION,
        location.BEZIRK,
        location.ADRESSE,
        location.TELEFONNUMMER,
        location.EMAIL,
        location.WEBLINK1
    );

    // Display the location details
    locationDiv.innerHTML = `
        <strong>${loc.Location}</strong><br>
        Address: ${loc.Adresse}<br>
        Phone: ${loc.TelefonNummer}<br>
        Email: ${loc.Email}<br>
        Website: <a href="${loc.Weblink}" target="_blank">${loc.Weblink}</a>
    `;
}


locationButton.addEventListener("click", printRndLocation);

