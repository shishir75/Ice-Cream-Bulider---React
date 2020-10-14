import React, { Component } from "react";
import classes from "./IceCreamBuilder.module.css";
import Builder from "../../components/Builder/Builder";
import IceCream from "../../components/IceCream/IceCream";

class IceCreamBuilder extends Component {
    state: {};

    render() {
        return (
            <div className={[classes.container, "container"].join(" ")}>
                <IceCream />
                <Builder />
            </div>
        );
    }
}

export default IceCreamBuilder;
