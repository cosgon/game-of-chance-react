import "./styles.css";
import { GiRock, GiPaper, GiScissors } from "react-icons/gi";

const Chooses = (props) => {
  const choose = (choose) => {
    return props.playerChoose([choose, Math.floor(Math.random(1) * 3) + 1]);
  };

  return (
    <div className="chooses">
      <button className="chooseButton" onClick={() => choose(1)}>
        Pedra <br />
        <GiRock />
      </button>
      <button className="chooseButton" onClick={() => choose(2)}>
        Papel <br />
        <GiPaper />
      </button>
      <button className="chooseButton" onClick={() => choose(3)}>
        Tesoura <br />
        <GiScissors />
      </button>
    </div>
  );
};

export default Chooses;
