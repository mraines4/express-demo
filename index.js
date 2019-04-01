// bring in the express module
const express = require('express');
const PORT = 3000;

// create an express app
// its roughly equivalent to the result of calling `http.createServer()`
const app = express();

function log(req,res,next) {
    console.log(`they asked for ${req.url}`);
    next();
};

function homePage(req,res) {
    res.send('home page as a named function!');
};

app.get('/', log, homePage);

// respond to GET requests for the path "/"
app.get('/', (req, res) => {
    // note: this is different from the plain `res.end`
    console.log('sending the home page');




    res.send('Home Page');
});

app.post('/', (req, res) => {
    console.log('responding to a post');
    res.send('you sent a POST');
});

app.put('/', (req, res) => {
    console.log('responding to a put');
    res.send('you sent a PUT');
});

// 1. identify the variable name that you want to have
// 2. in the string, write that variable name as part of the path
// 3. put a colon in front of the variable name in the path
// 4. it will now be part of req.params
app.put('/users/:userID', (req, res) => {
    console.log(req.params.userID);
    res.send(`you sent me a put for ${req.params.userID}`);
});

app.delete('/', (req, res) => {
    console.log('responding to a delete');
    res.send('you sent a DELETE');
});

app.delete('/users/:userID/delete', (req, res) => {
    console.log(req.params.userID);
    res.send(`you just deleted ${req.params.userID}`);
});

app.get('/bye', (req, res) => {
    res.send('BYE YALL')
});

// listen on our PORT
app.listen(PORT, () => {
    console.log(`your amazing express app is running on port ${PORT}`);
});