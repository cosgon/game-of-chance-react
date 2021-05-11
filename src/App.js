import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Battle from "./components/Battle";
import Chooses from "./components/Chooses";
import { useEffect, useState } from "react";

function App() {
  const [playerPoints, setPlayerPoints] = useState(0);
  const [machinePoints, setMachinePoints] = useState(0);
  const [choose, setChoose] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const winComb = [
      [1, 3],
      [3, 2],
      [2, 1],
    ];

    for (let i = 0; i < winComb.length; i++) {
      if (winComb[i][0] === choose[0] && winComb[i][1] === choose[1]) {
        setMessage("Você Venceu");
        return setPlayerPoints((p) => p + 5);
      }
    }

    if (choose[0] === choose[1]) {
      return setMessage("Empate");
    } else {
      setMessage("Máquina Venceu");
      return setMachinePoints((m) => m + 5);
    }
  }, [choose]);

  return (
    <div className="App">
      <header>
        <h1> Pedra, Papel e Tesoura</h1>
      </header>

      <main>
        <ScoreBoard playerPoints={playerPoints} machinePoints={machinePoints} />
        <Battle chooses={choose} />
        <Chooses playerChoose={setChoose} />
      </main>

      <footer>
        <h3>{message}</h3>
      </footer>
    </div>
  );
}

export default App;
