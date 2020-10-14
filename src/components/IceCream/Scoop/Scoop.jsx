import React from "react";
import classes from "./Scoop.module.css";

const Scoop = () => {
    return <div className={[classes.scoop, classes.orange].join(" ")} />;
};

export default Scoop;
