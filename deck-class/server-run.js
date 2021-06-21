const { Deck, Hand } = require('./app/deck.js');
const express = require('express');

const app = express();
const port = 4000;
// app.use(cors());

app.use(express.static('public'));
app.use(express.json());


const deck = new Deck();
const users = {};
let game = deck.fetchDeck(5);
const fullDeck = new Deck()

app.get('/deck', (req, res) => {
    res.json(fullDeck.cards);
})
app.get("/fulldeck", (req, res) => {
    res.sendFile(__dirname + "/public/fulldeck.html")
})
app.get('/game', (req, res) => {
    res.json(game);
});

app.get('/deck/:size', (req, res) => {
    const { size } = req.params;
    res.json(deck.fetchDeck(parseInt(size)));
});

app.get('/admin', (req, res) => {
    res.json(deck, game, users);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



