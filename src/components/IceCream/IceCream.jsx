import React from "react";
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";

const IceCream = ({ scoops }) => {
    // const flavors = Object.keys(scoops); // ['vanilla', 'chocolate', 'lemon', 'orange', 'strawberry], object to array conversion

    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone} />

                {scoops.map((scoop) => (
                    <Scoop scoop={scoop} key={`${scoop}${Math.random()}`} />
                ))}
                <div className={classes.cherry} />
            </div>
        </div>
    );
};

export default IceCream;
