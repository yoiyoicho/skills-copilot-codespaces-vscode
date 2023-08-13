// Create web server
// 1. Create a web server
// 2. Create a route to handle GET requests to /comments
// 3. Create a route to handle POST requests to /comments
// 4. Create a route to handle DELETE requests to /comments/:id

// 1. Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 2. Create a route to handle GET requests to /comments
// 3. Create a route to handle POST requests to /comments
// 4. Create a route to handle DELETE requests to /comments/:id
let comments = [
    { id: 1, author: 'Nathan', message: 'Hello World' },
    { id: 2, author: 'Nathan', message: 'Hello World' },
    { id: 3, author: 'Nathan', message: 'Hello World' },
    { id: 4, author: 'Nathan', message: 'Hello World' },
];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.send(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// 5. Create a route to handle PUT requests to /comments/:id
app.put('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = req.body;
    comments = comments.map(c => c.id === id ? comment : c);
    res.send(comments);
});