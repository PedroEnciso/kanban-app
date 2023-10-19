import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Layout from "./components/Layout/Layout";
import ColumnContainer from "./components/Column/ColumnContainer";
import BoardContextProvider from "./store/BoardContextProvider";
import Sidebar from "./components/Layout/Sidebar";
import OpenSidebar from "./components/Layout/OpenSidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebarHandler = () => {
    setShowSidebar((prev) => !prev);
  };

  const sidebarContent = showSidebar ? (
    <Sidebar toggleSidebar={toggleSidebarHandler} />
  ) : (
    <OpenSidebar toggleSidebar={toggleSidebarHandler} />
  );

  return (
    <BoardContextProvider>
      <Layout showSidebar={showSidebar}>
        {sidebarContent}
        <Nav />
        <ColumnContainer />
      </Layout>
    </BoardContextProvider>
  );
}

export default App;
