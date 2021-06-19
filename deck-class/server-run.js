const { Deck, Hand } = require('./app/deck.js');
const express = require('express');

const app = express();
const port = 4001;
// app.use(cors());

app.use(express.static('public'));
app.use(express.json());


const deck = new Deck();
// const shuffled = deck.fetchDeck(5);
// const hand = deck.fetchDeck(5);

app.get('/deck', (req, res) => {
    res.json(deck.cards);
})

// app.get('/table', (req, res) => {
//     res.json({
//         table,
//     });
// });

// app.get('/hand/:size', (req, res) => {
//     const { size } = req.params;
//     const playerHand = new Hand(deck, parseInt(size));
//     res.json({
//         playerHand,
//         tableHand,
//     });
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



