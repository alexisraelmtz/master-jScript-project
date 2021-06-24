import React, { useState, useEffect } from 'react';
import { Card } from '../card/card.js';
import './deck.scss';


const Deck = ({ title, path, turned }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            setCards(await (await fetch(`http://localhost:4000/${path}`)).json());
        })();
    }, [path]);

    return (
        <div className="{title}">
            <h3>{title}</h3>
            <div className="{title}">{cards.map((card, index) => {
                const number = card.slice(0, -1);
                const symbol = card.slice(-1);
                return (<Card
                    symbol={symbol}
                    number={number}
                    key={index}
                    turned={parseInt(turned) > index}
                />);
            })}</div>
        </div>
    );
};

export {
    Deck
};

