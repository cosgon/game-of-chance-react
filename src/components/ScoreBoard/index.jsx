import "./styles.css";

const ScoreBoard = () => {
  return (
    <div className="scoreBoard">
      <h2 className="title">Placar</h2>
      <div className="player">
        <h2>10</h2>
        <h4>Jogador</h4>
      </div>
      <div className="machine">
        <h2>5</h2>
        <h4>Máquina</h4>
      </div>
    </div>
  );
};

export default ScoreBoard;
