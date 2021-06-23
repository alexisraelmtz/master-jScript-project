import './App.css';
// import React from 'react';
import logo from './logo.svg';
import React, { useState, useEffect } from "react";

const Card = ({ number, symbol, turned, makeTurn }) => {
  const isNumber = !isNaN(number);
  const isAce = (num, sym) => (num === "A" ? <div id="ace">{sym}</div> : "");
  const [isTurned, setisTurned] = useState(turned);
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
          <div className="card-corner bottom-right">
            <div>{number}</div>
            <div>{symbol}</div>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};



const Deck = ({ title, path, turned }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      setCards(await (await fetch(`http://localhost:4001/${path}`)).json());
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


function App() {

  return (
    <div className="cards">
      <h1> jS.Poker </h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      </p>
      <Deck title="game" path="game/" turned="2" />
      <Deck title="hand" path="deck/2" turned="2" />
      <Deck title="deck" path="deck/" turned="2" />
    </div >
  );
}

export default App;

