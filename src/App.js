import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Layout, Header, Board } from "./components";
import { BoardContext } from "./context";
import { customTheme } from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Header title="Taskman" subtitle="A simple task tracker" />
        <BoardContext.BoardContextProvider>
          <Board />
        </BoardContext.BoardContextProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
