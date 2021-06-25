// import React from 'react';
import React, { useState } from "react";
import './card.scss';


const Card = ({ symbol, number, turned, makeTurn }) => {
    const isNumber = !isNaN(number);
    const [isTurned, setIsTurned] = useState(turned);

    return <div
        className={['card', (isTurned ? 'turned' : '')].filter(Boolean).join(' ')}
        makeTurn={() => setIsTurned(!isTurned)}
        symbol={symbol}
        number={number}
    >
        <div className="container">
            <div className="front">
                <div className="symbols" data-before={`${number}\n${symbol}`}>
                    {(number === 'A') && <i>{symbol}</i>}
                    {(['J', 'Q', 'K', 'A'].includes(number)) && <div></div>}
                    {(isNumber) && new Array(parseInt(number)).fill(symbol).map((_, key) => <i key></i>)}
                </div>
            </div>
            <div className="back"></div>
        </div>
    </div>
};

export {
    Card
};