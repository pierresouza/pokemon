import React, { useState } from "react";
import logo from "../../assets/pokemon-logo.png";
import pokeball from "../../assets/pokeball.png";
import { usePokemonsQuery } from "../../generated/graphql";
import { Container, Content, Item, InputSearch } from "./styles";
import { MockedPokemon } from "./mock";

export const Pokemon = () => {
  const { data } = usePokemonsQuery();

  return (
    <Container>
      <InputSearch>
        <img src={logo} alt="" />
        <div>
          <input type="text" placeholder="Search Pokemon" />
        </div>
      </InputSearch>

      <Content>
        {data?.gen3_species.map(({ id, name }) => (
          <Item key={id}>
            {name}
            <img src={pokeball} alt="" />
          </Item>
        ))}
      </Content>
    </Container>
  );
};
