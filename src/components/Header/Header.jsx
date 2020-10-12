import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <div className="container react" id="header">
                <div>
                    <img className="logo" src="images/logo.svg" alt="Logo" />
                </div>
                <div className="textRight">
                    <img
                        src="images/react.svg"
                        alt="React"
                        className={classes.reactLogo}
                    />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;
