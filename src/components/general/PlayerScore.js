import React from "react";

const PlayerScore = ({ info }) => {
  return (
    <>
      <tr>
        <td>{info.n}</td>
        <td>{info.s}</td>
      </tr>
    </>
  );
};

export default PlayerScore;
