import "./App.css";
import Cardlist from "./cardlist";
import { robots } from "./robots";
import SearchBox from "./searchbox";
import React, { useState } from "react";


const App = () => {
  const [searchfield, setsearchfield] = useState("");
  let [filter, setfilter] = useState(robots);

  const onsearchchange = (event) => {
    setsearchfield(event.target.value);
    console.log(event.target.value)
    if (event.target.value === "") {
      setfilter(robots);
    } 
    else {
      setfilter(
        filter.filter((v) => {
          if (v.name.toLowerCase().includes(searchfield.toLowerCase())) {
            return v;
          }
        })
      );
    }
  };


  return (
    <div className="w-100 db tc ">
      <h1>Robot :</h1>
      <SearchBox searchChange={onsearchchange} />
      <Cardlist robots={filter} />
    </div>
    
  );
};
export default App;
