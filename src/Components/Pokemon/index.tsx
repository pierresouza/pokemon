import React, { useState } from "react";
import logo from "../../assets/pokemon-logo.png";
import pokeball from "../../assets/pokeball.png";
import { usePokemonsQuery } from "../../generated/graphql";
import { Container, Content, Item, InputSearch } from "./styles";

export const Pokemon = () => {
  const [search, setSearch] = useState("");
  const { data } = usePokemonsQuery();

  const pokemonsFiltrados = data?.gen3_species.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

  return (
    <Container>
      <InputSearch>
        <img src={logo} alt="" />
        <div>
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </InputSearch>

      <Content>
        {pokemonsFiltrados?.map(({ id, name }) => (
          <Item key={id}>
            <img src={pokeball} alt="" />
            {name}
          </Item>
        ))}
      </Content>
    </Container>
  );
};
