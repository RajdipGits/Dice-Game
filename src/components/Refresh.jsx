import React, { useState } from "react";

const Refresh = ({ setTotalScore }) => {
  const [btn, setbtn] = useState(false);

  const Showbtn = () => {
    setbtn((prev) => !prev);
  };

  const Resetbtn = () => {
    setTotalScore(0);
  };
  return (
    <div className="flex gap-2 flex-col justify-center items-center pt-6">
      <button
        className=" px-10 py-2 border-2 rounded font-medium cursor-pointer"
        onClick={Resetbtn}
      >
        Reset Score
      </button>
      <button
        className=" px-10 py-2 bg-black text-white font-medium rounded cursor-pointer"
        onClick={Showbtn}
      >
        Show Rules
      </button>

      {btn ? (
        <div className="bg-red-100  p-2 rounded mx-10">
          <h1 className="text-2xl font-bold pb-2">How to play Dice Game</h1>
          <p className="pl-2 font-normal">Select any Number.</p>
          <p className="pl-2 font-normal">Click on Dice Image.</p>
          <p className="pl-2 font-normal">
            After click on Dice if selected number is equal to Dice number you will
            get same point as Dice.
          </p>
          <p className="pl-2 font-normal">
            If you get wrong guess then 2 point will be dedcuted.
          </p>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default Refresh;
