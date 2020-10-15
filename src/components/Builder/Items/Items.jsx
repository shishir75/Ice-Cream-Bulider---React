import React from "react";
import Item from "./Item/Item";

const Items = ({ items, add, remove }) => {
    const flavors = Object.keys(items);
    return (
        <div>
            <ul>
                {flavors.map((flavor) => (
                    <Item
                        name={flavor}
                        key={flavor}
                        add={add}
                        remove={remove}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Items;
