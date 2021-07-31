import React from "react";
import "../node_modules/bulma/css/bulma.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";
import GeneralContext from "./context/GeneralContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext>
          <GeneralContext>
            <Navbar />
            <Switch>
              <Route exact path={["/", "/category/:categoryName"]} component={ItemListContainer} />
              <Route exact path="/product/:productID" component={ItemDetailContainer} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </GeneralContext>
        </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
