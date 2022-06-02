import React, { useState } from "react";
import data from "../../data/scores";
import Country from "../general/Country";

const Main = () => {
  const [ascending, setAscending] = useState(true);

  return (
    <article>
      <button
        onClick={() => {
          setAscending(!ascending);
        }}
      >
        Toggle
      </button>

      <h1 className="title ">High Score Per Country</h1>
      {data.map((item, index) => {
        return (
          <Country
            country={item}
            key={index}
            ascending={ascending}
            setAscending={setAscending}
          ></Country>
        );
      })}
    </article>
  );
};

export default Main;
