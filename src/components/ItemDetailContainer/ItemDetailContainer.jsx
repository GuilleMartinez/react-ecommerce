import React, { useEffect, useState } from "react";
import { fetchWithDetaly, getRandomIndex } from "../../scripts/fetchWithDelay";
import ItemDetail from "./ItemDetail";
import ItemCountContainer from "../ItemCount/ItemCountContainer";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  
  const requestData = () => {
    fetchWithDetaly("/products.json", 2000, function getProduct(json) { 
        const randomIndex = getRandomIndex(json);
        setProduct(json[randomIndex]);
    });
  };

  useEffect(requestData, []);

  return (
    <div className="container">
        {product && <ItemDetail {...product}> 
                        <ItemCountContainer stock={product.stock} initial={1}/>
                    </ItemDetail>
        }
    </div>
  );

};

export default ItemDetailContainer;
