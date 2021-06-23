import logo from './logo.svg';
import './App.css';
import React from 'react';


class Deck extends React.Component {

  state = {
    cards: []
  }

  componentDidMount() {
    (async () => {
      const cards = await (await fetch(`http://localhost:4000/${this.props.path}`)).json()
      console.log(`http://localhost:4040/${this.props.path}`, this.props.title, cards);
      this.state.cards = cards;
      this.setState({
        cards: cards
      })
    })();
  }

  render() {
    return <div>
      <h3>{this.props.title}</h3>
      <div className="deck">I'am the {JSON.stringify(this.state.cards)} Deck!</div>
    </div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <Deck title="Game" path="game/" />
        <Deck title="Hand" path="deck/2" />
      </header>
    </div>
  );
}

export default App;
