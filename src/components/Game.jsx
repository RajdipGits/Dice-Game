import { useState } from "react";
import SelectNum from "./SelectNum";
import Score from "./Score";
import Dice from "./Dice";
import Refresh from "./Refresh";

const Game = () => {
  const [Value, setValue] = useState(undefined);
  const [Genrate, setGenrate] = useState(1);
  const [TotalScore, setTotalScore] = useState(0);
  const [Warn, setWarn] = useState("");

  // generate dice number
  const NumGenrate = (min, max) => {
    let result = Math.floor(Math.random() * (max - min) + min);
    return result;
  };

  // roll dices
  const rolldice = () => {
    if (!Value) {
      setWarn("You have not select any number");
      return;
    }
    let number = NumGenrate(1, 7);
    setGenrate(() => number);
    setWarn("");
    // check the score
    if (Value == Genrate) {
      setTotalScore((prev) => prev + Value);
    } else {
      setTotalScore((prev) => prev - 2);
    }
    setValue(undefined);
  };

  

  return (
    <div>
      <div className="flex flex-wrap justify-between px-8 py-4">
        <Score TotalScore={TotalScore} />
        <SelectNum Value={Value} setValue={setValue} Warn={Warn} />
      </div>
      <Dice Genrate={Genrate} setGenrate={setGenrate} rolldice={rolldice} />

      <Refresh setTotalScore={setTotalScore} />
    </div>
  );
};

export default Game;
