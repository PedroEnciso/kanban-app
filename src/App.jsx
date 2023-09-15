import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Layout from "./components/Layout/Layout";
import ColumnContainer from "./components/Column/ColumnContainer";
import BoardContextProvider from "./store/BoardContextProvider";

function App() {
  return (
    <BoardContextProvider>
      <Layout>
        <Nav />
        <ColumnContainer />
      </Layout>
    </BoardContextProvider>
  );
}

export default App;
