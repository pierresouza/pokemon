import React from "react";

import { client } from "./services/api";
import { Pokemon } from "./Components/Pokemon";
import { ApolloProvider } from "@apollo/client";

import { Container } from "./style";
import { GlobalStyles } from "./Styles/GlobalStyles";

export function App() {
  return (
    <Container>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Pokemon />
      </ApolloProvider>
    </Container>
  );
}
