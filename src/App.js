import React from "react";
import { ThemeProvider } from "styled-components";

import InputBase from "./components/InputBase";
import GlobalStyle from "./styles/GlobalStyle";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Container>
        <SearchForm />
        <InputBase label="Sample" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
