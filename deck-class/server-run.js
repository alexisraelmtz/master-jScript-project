const express = require('express');
const app = express();
const port = 4010;
app.use(cors())

app.use(express.static('public'));

const { Deck, Hand } = require('./app/deck.js');

const deck = new Deck();


app.get('/deck', (req, res) => {
    res.json(deck.cards);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



