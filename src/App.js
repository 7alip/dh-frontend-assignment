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
        <div>
          <h3>Base input field</h3>
          <InputBase id="text" label="Sample" />
        </div>
        <div>
          <h3>Dropdown Bottom</h3>
          <SearchForm id="search1" />
        </div>
        <div style={{ height: "calc(100vh - 500px)" }} />
        <div>
          <h3>Dropdown Top</h3>
          <SearchForm id="search2" />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
