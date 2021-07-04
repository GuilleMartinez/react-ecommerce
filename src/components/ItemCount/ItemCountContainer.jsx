import React, { useState } from "react";
import ItemCount from "./ItemCount";

const CountContainer = ({stock, initial}) => {
  
  const [count, setCount] = useState(initial);
  const updateValue = (e) => setCount(count + Number(e.target.value));

  return (
    <div className="level is-mobile p-2 m-0">
      <ItemCount stock={stock} count={count} onAdd={updateValue} />
    </div>
  );
};

export default CountContainer;
