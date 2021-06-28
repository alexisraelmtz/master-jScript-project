// import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect, CChhildren } from 'react';
import Card from '../card/card';
import styles from '../../styles/styles.module.scss';
import { Children } from 'react';


const Deck = ({ className, Children, title, cards, turned }) => {
    // const [cards, setCards] = useState([]);
    // // const [makeTurn, setIsTurned] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         setCards(await (await fetch(`http://localhost:3000/api/cards/${path}`)).json());
    //     })();
    // }, [path]);

    // console.log(cards)
    return (
        <div className={[`styles.${title}`, className].filter(Boolean).join(' ')}>
            {(cards.length === 0) ?
                <div>Loading ... </div> :
                <>
                    {Children}
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

export default Deck;

