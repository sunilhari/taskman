import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Layout, Header, Board, AppAlert } from "./components";
import { BoardContext } from "./context";
import { customTheme } from "./theme";
import { isIncognitoMode } from "./utils";
import "./App.css";

function App() {
  const [alert, setAlert] = React.useState(false);
  React.useState(async () => {
    const isIncognito = await isIncognitoMode();
    setAlert(isIncognito);
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        {alert ? (
          <AppAlert
            title="You have Opened your browser in Incognito Mode"
            desc="Taskman wont be able to persist any of your tasks.It will disappear once you close your browser window"
          />
        ) : null}
        <Header title="Taskman" subtitle="A simple task tracker" />
        <BoardContext.BoardContextProvider>
          <Board />
        </BoardContext.BoardContextProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
