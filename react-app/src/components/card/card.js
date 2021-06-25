// import React from 'react';
import React, { useState } from "react";
import './card.scss';


const Card = ({ symbol, number, turned }) => {
    const isNumber = !isNaN(number);
    const [isTurned, setIsTurned] = useState(turned);

    return <div
        symbol={symbol}
        number={number}
        className={['card', (isTurned ? 'turned' : '')].filter(Boolean).join(' ')}
        onClick={() => setIsTurned(!isTurned)}
    >
        <div className="container">
            <div className="front">
                <div className="symbols" data-before={`${number}\n${symbol}`}>
                    {(number === 'A') && <i>{symbol}</i>}
                    {(['J', 'Q', 'K', 'A'].includes(number)) && <div></div>}
                    {(isNumber) && new Array(parseInt(number)).fill(symbol).map((_, key) => <i key={key}>{symbol}</i>)}
                </div>
            </div>
            <div className="back"></div>
        </div>
    </div>
};

export {
    Card
};