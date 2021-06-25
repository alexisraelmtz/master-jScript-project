import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect, Children } from 'react';
import { Card } from '../card/card.js';
import './deck.scss';


// const Deck = ({ title, path, turned }) => {
const Deck = ({ className, child, title, path, turned }) => {
    const [cards, setCards] = useState([]);
    // const [makeTurn, setIsTurned] = useState(false);

    useEffect(() => {
        (async () => {
            setCards(await (await fetch(`http://localhost:4000/${path}`)).json());
        })();
    }, [path]);

    return (
        <div className={[`${title}`, className].filter(Boolean).join(' ')}>
            {(cards.length === 0) ?
                <div>Loading ... </div> :
                <>
                    {child}
                    {cards.map((card, key) => {
                        const number = card.slice(0, -1);
                        const symbol = card.slice(-1);
                        const isTurned = parseInt(turned) > key;

                        return <Card {...{ symbol, number, key, turned: isTurned }} />
                    })}
                </>
            }
        </div>
    );
};

export {
    Deck
};