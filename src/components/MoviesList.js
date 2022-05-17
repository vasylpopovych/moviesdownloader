import React, { useState, useEffect } from "react";
import SimulateAsync from "../utils/useSimulateAsync";
import { payload } from "../mock/index";
import MovieItem from "./MovieItem";
import "../styles/styles.css";

const MoviesList = () => {
  const [movies, getMovies] = useState(false);
  const [isShowMovies, setIsShowMovies] = useState(false);

  const restructureMovieData = (data) => {
    let restructuredData = [];
    for(let i = 0; i < Object.values(data)[0].length; i++){
      restructuredData.push({})
      for(let value of Object.entries(data)) {
        restructuredData[i][value[0]] = value[1][i]
      }
    }
        return restructuredData
  }

  useEffect(() => {
    if (typeof movies !== "object") {
      SimulateAsync(payload).then(
        (result) => {
          getMovies(restructureMovieData(result));
          console.log(`Movies downloaded successfully`);
        },
        (err) => {
          // adding random number to 'movies' for re-call load data
          getMovies(Math.random());
          console.log(`Load data error`);
        }
      );
    }
  }, [movies]);

  const showMovies = () => {
    if (typeof movies === "object") setIsShowMovies(true);
  };

  if (isShowMovies) {
    return (
      <div className="moviesList">
        <div className="button" onClick={showMovies}>Load Movies</div>
        <div className="movieContainer">
          {movies.map((movie) => <MovieItem movieData={movie} key={Date.now() + Math.random()}/>)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="moviesList">
        <div className="button" onClick={showMovies}>Load Movies</div>
        <div style={{ marginTop: "10px" }}>Movies not yet uploaded</div>
      </div>
    );
  }
};

export default MoviesList;

