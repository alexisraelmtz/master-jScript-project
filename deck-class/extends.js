const express = require('express');
const app = express();

const { Deck, Hand } = require('./app/deck.js');
// const deck = new Deck();
// const hand1 = new Hand(deck, 4);

function hello() {
    alert("This Worked from jScript")
    app.get('/', (req, res) => {
        const deck = new Deck();
        const hand1 = new Hand(deck, 4);
        res.send({
            cards: deck.cards,
            handUser1: hand1.cards
        });
    })
    // console.log(deck.cards)
}


