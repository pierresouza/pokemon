import React, { useEffect, useState } from "react";
import { usePokemonsQuery } from "../../generated/graphql";
import pokeball from "../../assets/pokeball.png";
import logo from "../../assets/pokemon-logo.png";
import { Container, Content, Item, InputSearch } from "./styles";

export const Pokemon = () => {
  const { data } = usePokemonsQuery();

  return (
    <Container>
      <InputSearch>
        <img src={logo} alt="" />
        <div>
          <input type="text" placeholder="digite o nome de um pokemon" />
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
