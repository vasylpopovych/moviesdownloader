import React, { useState, useEffect } from "react";
import SimulateAsync from "../utils/useSimulateAsync";
import { payload } from "../mock/index";
import MovieItem from "./MovieItem";
import "../styles/styles.css";

const MoviesList = () => {
  const [movies, getMovies] = useState(false);
  const [isShowMovies, setIsShowMovies] = useState(false);

  useEffect(() => {
    if (typeof movies !== "object") {
      SimulateAsync(payload).then(
        (result) => {
          getMovies(result);
          console.log(`Movies downloaded successfully `);
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
      setIsShowMovies(true);
    }
  };

  if (isShowMovies) {
    return (
      <div className="moviesList">
        <div className="button" onClick={showMovies}>Load Movies</div>
        <div className="movieContainer">
          
          <MovieItem
            title={movies.titles[0]}
            year={movies.releases_years[0]}
            budget={movies.budget[0]}
            box_office={movies.box_office[0]}
          />
          <MovieItem
            title={movies.titles[1]}
            year={movies.releases_years[1]}
            budget={movies.budget[1]}
            box_office={movies.box_office[1]}
          />
          <MovieItem
            title={movies.titles[2]}
            year={movies.releases_years[2]}
            budget={movies.budget[2]}
            box_office={movies.box_office[2]}
          />
          <MovieItem
            title={movies.titles[3]}
            year={movies.releases_years[3]}
            budget={movies.budget[3]}
            box_office={movies.box_office[3]}
          />

        <MovieItem/>
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
