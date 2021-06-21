import logo from './logo.svg';
import './App.css';


function Deck(props) {
  (async () => {
    const cards = await (await fetch(`http://localhost:4001/${props.path}`)).json()
    console.log(props.path, cards);
  })();
  return <div>I'am the {props.title} Deck!</div>
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
