import React, { useState } from "react";
import styled from "styled-components";
import "./styles/styles.css";
import MoviesList from "./components/MoviesList";



const App = () => {
  

  return (
    <div>
      <Wrapper>
        <MoviesList />
      </Wrapper>
    </div>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;


