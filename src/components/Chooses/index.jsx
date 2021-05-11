import "./styles.css";
import { GiRock, GiPaper, GiScissors } from "react-icons/gi";

const Chooses = () => {
  return (
    <div className="chooses">
      <button className="chooseButton">
        Pedra <br />
        <GiRock />
      </button>
      <button className="chooseButton">
        Papel <br />
        <GiPaper />
      </button>
      <button className="chooseButton">
        Tesoura <br />
        <GiScissors />
      </button>
    </div>
  );
};

export default Chooses;
