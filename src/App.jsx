import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path={["/", "/category/:id"]} component={ItemListContainer} />
          <Route exact path="/product/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
