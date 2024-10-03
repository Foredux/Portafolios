import React, { useState } from "react";
import { HomePort } from "./components/homePort";
import ContactPort from "./components/contactPort";
import AboutPort from "./components/aboutPort";
import HeaderPort from "./components/headerPort";
import FooterPort from "./components/footerPort"; // Importa el footer

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
      <div className="content-container">
        <header className="App-header">{ViewComponent()}</header>
      </div>
      <FooterPort /> {/* Footer siempre al final */}
    </div>
  );
};

export default App;
