// import React from 'react';
import React, { useState } from "react";
import './card.scss';

const Card = ({ number, symbol, turned, makeTurn }) => {
    const isNumber = !isNaN(number);
    const [isTurned, setisTurned] = useState(turned);

    const isAce = (num, sym) => (
        num === "A" ?
            <div id="ace">{sym}</div>
            : "");

    const choseClass = () => {
        if (isTurned && !makeTurn) {
            return "turned";
        } else if (isTurned && makeTurn) return "";
    };

    return (
        <div
            className={`card ${choseClass()}`.trim()}
            onClick={() => setisTurned(!isTurned)}>
            <div className="container">
                <div className={`front ${symbol} ${number}`}>
                    <div className="card-corner top-left">
                        <div className="number">{number}</div>
                        <div className="symbol">{symbol}</div>
                    </div>
                    <div className="symbols">
                        {isNumber
                            ? new Array(parseInt(number))
                                .fill(symbol)
                                .map((cardSymbol, index) => (
                                    <div key={index}>{cardSymbol}</div>
                                ))
                            : isAce(number, symbol)}
                    </div>
                    <div className="card-corner down-right">
                        <div>{number}</div>
                        <div>{symbol}</div>
                    </div>
                </div>
                <div className="back"></div>
            </div>
        </div>
    );
};

export {
    Card
};