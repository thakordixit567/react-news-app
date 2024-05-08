import { useState } from "react";
import Navbar from "./Componets/Navbar";
import NewsBord from "./Componets/NewsBord";
import React from "react";

const App = () => {

  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBord category={category}/>
      
    </div>
  );
};

export default App;
