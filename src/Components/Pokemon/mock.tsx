import React from "react";
import { usePokemonsQuery } from "../../generated/graphql";
import pokeball from "../../assets/pokeball.png";

import { Content, Item } from "./styles";

export const MockedPokemon = () => {
  const { data } = usePokemonsQuery();

  return (
    <Content>
      {data?.gen3_species.map(({ id, name }) => (
        <Item key={id}>
          {name}
          <img src={pokeball} alt="" />
        </Item>
      ))}
    </Content>
  );
};
