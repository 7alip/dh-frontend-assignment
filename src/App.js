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
        <SearchForm id="search1" />
        <InputBase id="text" label="Sample" />
        <div
          style={{
            height: "calc(100vh - 400px)",
            border: "1px solid gray",
            marginTop: "16px",
          }}
        />
        <SearchForm id="search2" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
