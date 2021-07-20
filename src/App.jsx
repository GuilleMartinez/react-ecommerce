import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/category/:id"]} component={ItemListContainer} />
            <Route exact path="/product/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={CartContainer} />
          </Switch>
        </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
