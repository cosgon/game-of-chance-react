import "./styles.css";

const Battle = (props) => {
  const { chooses } = props;

  const chooseName = (numb) => {
    switch (numb) {
      case 1:
        return "Pedra";

      case 2:
        return "Papel";

      case 3:
        return "Tesoura";

      default:
        break;
    }
  };

  return (
    <div className="battle">
      <div className="machineFight">
        <span>Máquina</span>
        <h3> {chooseName(chooses[1])} </h3>
      </div>
      <hr />
      <div className="playerFight">
        <span>Jogador</span>
        <h3>{chooseName(chooses[0])}</h3>
      </div>
    </div>
  );
};

export default Battle;
