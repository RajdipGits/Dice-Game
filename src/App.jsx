import React, { useState } from "react";
import Index from "./components/Index";
import Game from "./components/Game";

const App = () => {
  const [Openpage, setOpenpage] = useState(false);

  const ToChangePage = () => {
    setOpenpage((prev) => !prev);
  };
  return <>{Openpage ? <Game /> : <Index toggle={ToChangePage} />}</>;
};

export default App;
