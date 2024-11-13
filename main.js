'use strict'
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        const listElement = document.getElementById('list');
        const jsonString = JSON.stringify(data, null, 2);
        const preElement = document.createElement('pre');
        preElement.textContent = jsonString;
        listElement.appendChild(preElement);
    });

/*
fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
    .then(response => response.json())
    .then(data => {
        const listElement = document.getElementById('WienList');
        const jsonString = JSON.stringify(data, null, 2);
        const preElement = document.createElement('pre');
        preElement.textContent = jsonString;
        listElement.appendChild(preElement);
    });

 */
let locations= [];

let data = fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
    .then(response => response.json());

console.log(data);
