import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Battle from "./components/Battle";
import Chooses from "./components/Chooses";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Pedra, Papel e Tesoura</h1>
      </header>

      <main>
        <ScoreBoard></ScoreBoard>
        <Battle></Battle>
        <Chooses></Chooses>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
