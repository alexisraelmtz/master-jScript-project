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
                <div className="card-corner top-left">
                    <div>{number}</div>
                    <div>{symbol}</div>
                </div>
                <div className="symbols">
                    {(number === 'A') && <div>{symbol}</div>}
                    {(['J', 'Q', 'K'].includes(number)) && <div className="image"></div>}
                    {(isNumber) && new Array(parseInt(number)).fill(symbol).map((_, key) => <div key={key}>{symbol}</div>)}
                </div>
                <div className="card-corner down-right">
                    <div>{number}</div>
                    <div>{symbol}</div>
                </div>
            </div>
            <div className="back"></div>
        </div>
    </div>
};

export {
    Card
};