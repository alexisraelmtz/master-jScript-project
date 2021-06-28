// import React from 'react';
import React, { useState } from "react";
import styles from '../../styles/styles.module.scss';


const Card = ({ symbol, number, turned }) => {
    const isNumber = !isNaN(number);
    const [isTurned, setIsTurned] = useState(turned);


    return <div
        symbol={symbol}
        number={number}
        className={[styles.card, (isTurned ? styles.turned : '')].filter(Boolean).join(' ')}
        onClick={() => setIsTurned(!isTurned)}
    >
        <div className={styles.container}>
            <div className={styles.front}>
                <div className={styles.left}>
                    <div>{number}</div>
                    <div>{symbol}</div>
                </div>
                <div className={styles.symbols}>
                    {(number === 'A') && <div>{symbol}</div>}
                    {(['J', 'Q', 'K'].includes(number)) && <div className="image"></div>}
                    {(isNumber) && new Array(parseInt(number)).fill(symbol).map((_, key) => <div key={key}>{symbol}</div>)}
                </div>
                <div className={styles.right}>
                    <div>{number}</div>
                    <div>{symbol}</div>
                </div>
            </div>
            <div className={styles.back}></div>
        </div>
    </div>
};

export default Card;