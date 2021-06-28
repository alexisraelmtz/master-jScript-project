class Deck {
    numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    suits = ['♣', '♥', '♠', '♦'];
    cards = [];

    constructor() {
        this.suits.forEach(suit => {
            this.numbers.forEach(face => {
                this.cards.push(face + suit);
            });
        });
    }

    fetchDeck(size) {
        const cards = new Array(parseInt(size)).fill('');
        return cards.map(() => {
            const index = parseInt(Math.random() * this.cards.length);
            return this.cards.splice(index, 1)[0]
        }).filter(Boolean);
    }
}

class Hand {
    cards = [];
    constructor(deck, size) {
        this.cards = deck.fetchDeck(size);
    }
};

export default Deck;

