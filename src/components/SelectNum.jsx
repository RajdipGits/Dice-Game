import React, { useState } from "react";

const SelectNum = ({ Value, setValue, Warn }) => {
  let num = [1, 2, 3, 4, 5, 6];
  return (
    <div className="p-4 flex flex-col gap-2 justify-center items-end relative">
      <div className="flex gap-4 flex-wrap">
        {num.map((item, index) => (
          <button
            key={index}
            className={`relative px-4 py-2 border-2 cursor-pointer Custom-NumHover font-medium ${item === Value ? "bg-black text-white" : "bg-white"}`}
            onClick={() => setValue(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="bg-red-600 p-2 rounded text-white absolute -bottom-5 ">
        {Warn}
      </p>

      <p className="font-medium text-xl">Select Number</p>
    </div>
  );
};

export default SelectNum;
