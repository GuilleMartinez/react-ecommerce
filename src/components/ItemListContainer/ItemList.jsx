import React from "react";
import ItemCountContainer from "../ItemCount/ItemCountContainer";
import Item from "./Item";

const ItemList = ({ items }) => {

    const generateItem = item => {
        return (
            <div key={item.id} className="column is-narrow is-flex is-justify-content-center">
                <Item {...item}>
                    <ItemCountContainer stock={item.stock} initial={1} />
                </Item>
            </div>
        )
    };

    return (
        <div className="columns is-multiline is-centered">
            {items.map(generateItem)}
        </div>
    );
};

export default ItemList;
