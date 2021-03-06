import { Deck } from '../../../lib/main';

const deck = new Deck();

export default function handler(req, res) {
    const { quantity } = req.query;
    const hand = deck.fetchDeck(parseInt(quantity));
    res
        .status(200)
        .send(hand)
}
