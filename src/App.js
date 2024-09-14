import React, { useState } from "react";
import { HomePort } from "./components/homePort";
import ContactPort from "./components/contactPort";
import AboutPort from "./components/aboutPort";
import HeaderPort from "./components/headerPort";

const App = () => {
  const [currentView, setCurrentView] = useState("homePort");

  const ViewComponent = () => {
    switch (currentView) {
      case "homePort":
        return <HomePort />;
      case "contactPort":
        return <ContactPort />;
      case "aboutPort":
        return <AboutPort />;
      default:
        return <HomePort />;
    }
  };

  return (
    <div className="App">
      <HeaderPort setCurrentView={setCurrentView} />
      <header className="App-header">{ViewComponent()}</header>
    </div>
  );
};

export default App;
