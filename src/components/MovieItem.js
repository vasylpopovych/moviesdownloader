import React, { useState } from "react";
import "../styles/styles.css";

const MovieItem = (movieData) => {
  const countNetProfit = () => {
    const netProfit = movieData.movieData.box_office - movieData.movieData.budget;
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
      <div className="titleMovie">{movieData.movieData.titles}</div>

      <div className="field">
        Release year:
        <div>{movieData.movieData.releases_years}</div>
      </div>
      <div className="field">
        Budget:
        <div>{movieData.movieData.budget + " $"}</div>
      </div>
      <div className="field">
        {" "}
        Box office:
        <div>{movieData.movieData.box_office + " $"}</div>
      </div>
      <div className="field">
        Net profit:
        <div style={{ color: styleColor }}>{netProfit + " $"}</div>
      </div>
    </div>
  );
};

export default MovieItem;
