import React from "react";
import { View } from "react-native";
import teston from '../styles/menu.module.css';

export class Menu extends React.Component {
    render() {
        console.log(teston)
        return (
            <div className="button">
                <div>
                    <span  >#####</span>
                    {/* <span style={styles.bar} />
                    <span style={styles.bar} /> */}
                </div>

                {/* <input type="checkbo    x" className="navigation__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label> */}
            </div >
        )
    }
}
