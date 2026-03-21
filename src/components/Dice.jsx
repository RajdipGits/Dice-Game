import React, { useState } from "react";

const Dice = ({ Genrate, rolldice }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <img
          src={`/Dice-Game/img/dice_${Genrate}.png`}
          alt=""
          className="cursor-pointer"
          onClick={rolldice}
        />
        <p className="font-medium">Click on Dice to Roll</p>
      </div>
    </div>
  );
};

export default Dice;
