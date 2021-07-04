import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
