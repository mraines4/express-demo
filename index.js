// bring in the express module
const express = require('express');
const PORT = 3000;

// create an express app
// its roughly equivalent to the result of calling `http.createServer()`
const app = express();

// respond to GET requests for the path "/"
app.get('/', (req, res) => {
    // note: this is different from the plain `res.end`
    res.send('Home Page');
});

app.post('/', (req, res) => {
    res.send('you sent a POST');
});

app.put('/', (req, res) => {
    res.send('you sent a PUT');
});

app.delete('/', (req, res) => {
    res.send('you sent a DELETE');
});


app.get('/bye', (req, res) => {
    res.send('BYE YALL')
});

// listen on our PORT
app.listen(PORT, () => {
    console.log(`your amazing express app is running on port ${PORT}`);
});