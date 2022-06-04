import React, { useState, useEffect } from "react";
import SimulateAsync from "../utils/useSimulateAsync";
import { payload } from "../mock/index";
import MovieItem from "./MovieItem";
import "../styles/styles.css";
import { any, string } from "prop-types";

const MoviesList = () => {
  const [movies, getMovies] = useState(false);
  const [isShowMovies, setIsShowMovies] = useState(false);
  

  const restructureMovieData = (data:{ [key: string]: any }) => {
    let restructuredData = [];
    for(let i = 0; i < Object.values(data)[0].length; i++){
      restructuredData.push({})
      for(let value of Object.entries(data)) {
        restructuredData[i][value[0]] = value[1][i];
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
    if (typeof movies === "object") {
      setIsShowMovies('Movies Downloaded') 
    } else if (typeof movies === "number") {
      setIsShowMovies('Downloading Error')
    }
  };

  if (isShowMovies === 'Movies Downloaded') {
    return (
      <div className="moviesList">
        <div className="button" onClick={showMovies}>Load Movies</div>
        <div className="movieContainer">
          {movies.map((movie) => <MovieItem movieData={movie} key={Date.now() + Math.random()}/>)}
        </div>
      </div>
    );
  } else if(isShowMovies === 'Downloading Error') {
    return (
      <div className="moviesList">
        <div className="button" onClick={showMovies}>Load Movies</div>
        <div style={{ marginTop: "10px" }}>Downloading Error! Please, try again ...</div>
      </div>
    );
  } else {
    return (
      <div className="moviesList">
        <div className="button" onClick={showMovies}>Load Movies</div>
      </div>
    );
  }
};

export default MoviesList;

