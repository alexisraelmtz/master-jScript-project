import { Deck } from '../../../lib/main';

const fullDeck = new Deck();
// const game = deck.fetchDeck(5);


export default function handler(req, res) {
    res
        .status(200)
        .json(fullDeck.cards)
}