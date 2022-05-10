import React, { useState } from "react";
import useSimulateAsync from "../utils/useSimulateAsync";
import { payload } from "../mock/index";
import MovieItem from "./MovieItem";
import "../styles/styles.css";

const MoviesList = () => { 
  const [movies, getMovies] = useState(null);
  const loadMovies = () => {
    useSimulateAsync(payload).then(
      (result) => {
        getMovies(result);
        console.log("Movies downloaded successfully");
      },
      (err) => {
        getMovies(err);
        console.log("Load data error");
      }
    );
  };
  if (movies) {
    return (
      <div className="moviesList">
        <button onClick={loadMovies}>Load Movies</button>
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
        </div>
      </div>
    );
  } else if (movies === undefined) {
    return (
      <div className="moviesList">
        <button onClick={loadMovies}>Load Movies</button>
        <div style={{ marginTop: "10px" }}>Upload error! Try again...</div>
      </div>
    );
  } else {
    return (
      <div className="moviesList">
        <button onClick={loadMovies}>Load Movies</button>
        <div style={{ marginTop: "10px" }}>Movies not yet uploaded</div>
      </div>
    );
  }
};

export default MoviesList;
