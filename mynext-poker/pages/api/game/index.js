import { Deck } from '../../../lib/deck';

const deck = new Deck();
const game = deck.fetchDeck(5);


export default function handler(req, res) {
    res
        .status(200)
        .json({ game })
}