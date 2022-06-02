import React from "react";
import PlayerScore from "../general/PlayerScore";
const Country = ({ country, ascending, setAscending }) => {
  return (
    <div>
      <h1 className="">High Score: {country.name}</h1>
      <table>
        <tbody>
          {ascending
            ? country.scores
                .sort((a, b) => b.s - a.s)
                .map((info, index) => {
                  return <PlayerScore key={index} info={info}></PlayerScore>;
                })
            : country.scores
                .sort((a, b) => a.s - b.s)
                .map((info, index) => {
                  return <PlayerScore key={index} info={info}></PlayerScore>;
                })}
        </tbody>
      </table>
    </div>
  );
};

export default Country;
