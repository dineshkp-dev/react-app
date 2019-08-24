import React from "react";
import logo from "./logo.svg";
import "./App.css";
import React1 from "./components/React1";
import React2 from "./components/React2";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <React1></React1>

      <React2></React2> */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
