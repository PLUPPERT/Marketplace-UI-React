import React from "react";
import "./App.css";
import NavBar, { Header } from "./components/NavBar";

function App() {
  const logo = "logo.jpg";
  const navLinks = ["Login", "Sign Up", "About"];

  const titleText = "Marketplace UI!";

  return (
    <div className="App">
      <NavBar logo={logo} navLinks={navLinks} />
      <Header
        bgColor={"bg-danger"}
        textColor={"text-light"}
        titleText={titleText}
      />
    </div>
  );
}

export default App;
