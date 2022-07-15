import React, { useState } from "react";
import logo from "../../assets/pokemon-logo.png";
import pokeball from "../../assets/pokeball.png";
import { usePokemonsQuery } from "../../generated/graphql";
import { Container, Content, Item, InputSearch } from "./styles";

export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState("");
  const { data } = usePokemonsQuery();
  console.log("🚀 ~ file: index.tsx ~ line 10 ~ Pokemon ~ data", data);

  return (
    <Container>
      <InputSearch>
        <img src={logo} alt="" />
        <div>
          <input
            type="text"
            placeholder="Search Pokemon"
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </div>
      </InputSearch>

      <Content>
        {pokemonName.trim().length == 0
          ? data?.gen3_species.map(({ id, name }) => (
              <Item key={id}>
                {name}
                <img src={pokeball} alt="" />
              </Item>
            ))
          : data?.gen3_species?.map(
              (pokemon) =>
                pokemon?.name === pokemonName && (
                  <Item key={pokemon?.id}>
                    {pokemon?.name}
                    <img src={pokeball} alt="" />
                  </Item>
                )
            )}
      </Content>
    </Container>
  );
};
