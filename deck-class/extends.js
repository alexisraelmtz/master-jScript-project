{
    const { Deck, Hand } = require('./app/deck.js');
    const firstDeck = new Deck();
    const playerOne = new Hand(firstDeck, 4);

    function showDeck() {
        // const { Deck, Hand } = require('./app/deck');
        // const Hand = require('./app/deck');


        alert("This Worked from jScript")
        document.querySelector("h3").innerHTML = (`${playerOne.cards}`);
        document.querySelector("h3").innerHTML = (`${firstDeck.cards}`);

        // console.log(deck.cards)
        // document.write(5 + 6);
    }
}