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