import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Pokemon } from "./Components/Pokemon";
import { client } from "./services/api";
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
