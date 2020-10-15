import React from "react";
import classes from "./Item.module.css";

const Item = ({ name, add, remove }) => {
    return (
        <li className={classes.item}>
            <span>{name}</span>
            <span className={classes.quantity}>2</span>
            <div className="right">
                <button
                    type="button"
                    className={[classes.plus, "rounded"].join(" ")}
                    onClick={add.bind(this, name)}
                >
                    +
                </button>
                <button
                    type="button"
                    className={[classes.minus, "rounded"].join(" ")}
                    onClick={remove.bind(this, name)}
                >
                    -
                </button>
            </div>
        </li>
    );
};

export default Item;
