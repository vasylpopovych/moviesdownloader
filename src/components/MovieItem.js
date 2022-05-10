import React, { useState } from "react";
import "../styles/styles.css";

const MovieItem = (movies) => {
  const countNetProfit = () => {
    const netProfit = movies.box_office - movies.budget;
    if (netProfit >= 0) {
      styleColor = "green";
      return "+ " + netProfit;
    } else {
      styleColor = "red";
      return Math.abs(netProfit);
    }
  };

  let styleColor;
  const netProfit = countNetProfit();

  return (
    <div className="movieItemWrapper">
      <div className="titleMovie">{movies.title}</div>

      <div className="field">
        Release year:
        <div>{movies.year}</div>
      </div>
      <div className="field">
        Budget:
        <div>{movies.budget + " $"}</div>
      </div>
      <div className="field">
        {" "}
        Box office:
        <div>{movies.box_office + " $"}</div>
      </div>
      <div className="field">
        Net profit:
        <div style={{ color: styleColor }}>{netProfit + " $"}</div>
      </div>
    </div>
  );
};

export default MovieItem;
