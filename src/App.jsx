import React from 'react';
import "../node_modules/bulma/css/bulma.min.css";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Hola! 👋 Bienvenidx a nuestra tienda"/>
    </div>
  );
}

export default App;
