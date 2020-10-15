import React, { Component } from "react";
import classes from "./IceCreamBuilder.module.css";
import Builder from "../../components/Builder/Builder";
import IceCream from "../../components/IceCream/IceCream";

class IceCreamBuilder extends Component {
    state = {
        items: {},
        scoops: [],
        totalPrice: 0,
    };

    componentDidMount() {
        fetch("https://react-ice-cream-899f0.firebaseio.com/items.json")
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    items: responseData,
                });
            });
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops]; // make a copy, spread operator

        workingScoops.push(scoop);

        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops]; // make a copy, spread operator

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

        workingScoops.splice(scoopIndex, 1);

        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],
            };
        });
    };

    render() {
        const { items, scoops, totalPrice } = this.state; // Destructure

        return (
            <div className={[classes.container, "container"].join(" ")}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        );
    }
}

export default IceCreamBuilder;
