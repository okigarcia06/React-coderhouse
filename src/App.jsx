//import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Greetings from "./components/Greetings/Greetings";
import ItemListContainer from "./components/itemListContainer/itemListContainertemListContainer";



function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-gray-950">
          <Header />
          <Greetings greeting="¡Bienvenido a mi Página Web!" />
        </div>
      </Router>
    </>
  );
}

export default App;
