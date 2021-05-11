import "./styles.css";

const Battle = () => {
  return (
    <div className="battle">
      <div className="machineFight">
        <span>Máquina</span>
        <h3> Pedra </h3>
      </div>
      <hr />
      <div className="playerFight">
        <span>Jogador</span>
        <h3>Papel</h3>
      </div>
    </div>
  );
};

export default Battle;
