import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Createpost from "../components/Createpost";
import Post from "../components/Post";
import Postlist from "../components/PostList";
import Postlistsprovider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <Postlistsprovider>
      <div className="app-container">
        <Sidebar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />

          <Footer></Footer>
        </div>
      </div>
    </Postlistsprovider>
  );
}

export default App;
