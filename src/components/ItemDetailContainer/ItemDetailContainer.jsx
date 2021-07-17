import React, { useEffect, useState } from "react";
import { fetchWithDetaly } from "../../scripts/fetchWithDelay";
import ItemDetail from "./ItemDetail";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import Loader from "../Loader/Loader";

import { useParams } from "react-router";

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [productData, setProduct] = useState({
    item: null,
    isLoading: true
  });
  
  const requestData = () => {
    fetchWithDetaly("/JSON/products.json", 1000, function getProduct(json) { 
      const product = json.find(product => product.id === +id);
      console.log(product);
        setProduct({ item: product, isLoading: false});
    });
  };

  useEffect(requestData, [id]);

  return (
    <div className="section">
      {productData.isLoading ? <Loader /> :
        <ItemDetail {...productData.item} >
            <ItemCountContainer stock={productData.item.stock} initial={1} />
       </ItemDetail>
       }
          
    </div>
  );

};

export default ItemDetailContainer;
