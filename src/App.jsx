//import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Greetings from "./components/Greetings/Greetings";


function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-gray-950">
          <Header />
          <Greetings greeting="¡Bienvenido a mi aplicación!" />
        </div>
      </Router>
    </>
  );
}

export default App;
