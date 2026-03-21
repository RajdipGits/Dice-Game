import React from "react";

const Index = ({ toggle }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center h-screen mx-10">
      <div>
        <img src="./public/img/dices.png" alt="Dices img" className="index-img" />
      </div>

      <div className="flex flex-col items-end gap-4">
        <h1 className="font-extrabold text-6xl md:text-8xl lg:text-8xl sm:text-8xl">Dice Game</h1>
        <button
          className="bg-black px-10 py-4 text-white rounded cursor-pointer text-lg font-medium hover:bg-gray-950 hover:text-gray-100"
          onClick={toggle}
        >
          Play now
        </button>
      </div>
    </div>
  );
};

export default Index;
