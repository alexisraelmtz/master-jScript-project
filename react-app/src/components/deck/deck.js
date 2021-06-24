import React, { useState, useEffect } from 'react';
import { Card } from '../card/card.js';
import './deck.scss';


const Deck = ({ title, path, turned }) => {
    const [cards, setCards] = useState([]);
    const [makeTurn, setisTurned] = useState(false);

    useEffect(() => {
        (async () => {
            setCards(await (await fetch(`http://localhost:4000/${path}`)).json());
        })();
    }, [path]);

    return (
        <div className="{title}">
            {cards.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h3>{title}</h3>
                    <div className="card">
                        {cards.map((card, index) => {
                            const number = card.slice(0, -1);
                            const symbol = card.slice(-1);
                            const isTurned = parseInt(turned) > index;
                            return (
                                <>
                                    <Card
                                        symbol={symbol}
                                        number={number}
                                        key={index}
                                        turned={isTurned}
                                        makeTurn={makeTurn}
                                    />
                                </>
                            );
                        })}
                    </div>
                    <button onClick={() => setisTurned(turned)}>{makeTurn}</button>
                </>
            )}
        </div>
    );
};

export {
    Deck
};