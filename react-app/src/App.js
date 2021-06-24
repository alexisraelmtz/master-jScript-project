import './App.scss';
import logo from '../src/components/assets/logo.svg';
import { Deck } from '../src/components/deck/deck.js';

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

