import React from "react";
import logo from "../../assets/pokemon-logo.png";
import { MockedPokemon } from "./mock";
import { Container, InputSearch } from "./styles";

export const Pokemon = () => {
  return (
    <Container>
      <InputSearch>
        <img src={logo} alt="" />
        <div>
          <input type="text" placeholder="Search Pokemon" />
        </div>
      </InputSearch>
      <MockedPokemon />
    </Container>
  );
};
