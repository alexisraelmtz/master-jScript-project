const { Deck, Hand } = require('./app/deck.js');
const express = require('express');

const app = express();
const port = 4000;
// app.use(cors());

app.use(express.static('public'));
app.use(express.json());


const deck = new Deck();
const users = {};
let table = deck.fetchDeck(5);


app.get('/deck', (req, res) => {
    res.json(deck.cards);
})

// app.get('/table', (req, res) => {
//     res.json(table);
// });

// app.get('/deck/:size', (req, res) => {
//     const { size } = req.params;
//     res.json(deck.fetchDeck(parseInt(size)));
// });

// app.get('/admin', (req, res) => {
//     res.json(deck, table, users);
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



