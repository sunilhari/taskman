import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Layout, Header, Sections } from "./components";
import { customTheme } from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Header title="Taskman" subtitle="A simple task tracker" />
        <Sections />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
