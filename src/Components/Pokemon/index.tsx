import React, { useState } from "react";
import { usePokemonsQuery } from "../../generated/graphql";

import { Container, Content, Item, InputSearch } from "./styles";

export const Pokemon = () => {
  const { data } = usePokemonsQuery();
  const [pokemon, setPokemon] = useState([]);

  return (
    <Container>
      <InputSearch placeholder="digite o nome de um pokemon" />
      <Content>
        {data?.gen3_species.map(({ id, name }) => (
          <Item key={id}>{name}</Item>
        ))}
      </Content>
    </Container>
  );
};
