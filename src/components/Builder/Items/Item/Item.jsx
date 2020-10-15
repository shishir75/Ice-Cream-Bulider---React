import React from "react";
import { countBy } from "lodash";
import classes from "./Item.module.css";

const Item = ({ name, add, remove, scoops = {} }) => {
    const scoopsByCount = countBy(scoops);

    return (
        <li className={classes.item}>
            <span>{name}</span>
            {scoopsByCount[name] >= 0 ? (
                <span className={classes.quantity}>{scoopsByCount[name]}</span>
            ) : null}

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
