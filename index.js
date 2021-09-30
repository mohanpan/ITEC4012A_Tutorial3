/*const sum = (num1, num2) => {

    return num1 + num2;
}

const result = sum(2, 3);

console.log (result); */

/* //create a txt file in this folder
const fs = require('fs');

const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "Hi, this file was made with Node");
    } catch (err) {
        console.log(err);
    }
}

generateFile();  */

/* //create a local host website
const http = require('http');

http.createServer(function (req, res) {
    res.write('Server started. Hi!!!');
    res.end();
}).listen(8080);  */

/* //exported already in another file, so we can call myModule in this file now
const myModule = require('./my-module');

const date = myModule();

console.log(date);  */

//requirng express
const express = require('express');
//initializing the express app
const app = express();
//specifying a port to listen on localhost:9000
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});

app.get('/api/cats', (req, res) => {
    //call to db

    //return dummy data
    const cats = ["British Short hair", "Rag-doll", "Russian Red"];
    res.send(cats);
});

//running the express http server on the port we specified
app.listen(port, () => {
    console.log ("Listening on port", port);
});