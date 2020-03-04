import React from "react";
import { Layout } from "../../components";
import Sections from "../Sections";
import { BoardContext } from "../../context";

function Board() {
  return (
    <BoardContext.BoardContextProvider>
      <Layout as="main" border="solid 1px" borderColor="brand.100" p={6}>
        <Sections />
      </Layout>
    </BoardContext.BoardContextProvider>
  );
}
export default Board;
