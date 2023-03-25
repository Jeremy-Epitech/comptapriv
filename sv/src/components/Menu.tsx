import React from "react";
import { StyleSheet, View } from 'react-native';

export class Menu extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <div>
                    <span style={styles.bar} />
                    <span style={styles.bar} />
                    <span style={styles.bar} />
                </div>

                {/* <input type="checkbo    x" className="navigation__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label> */}
            </View >
        )
    }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'gray',
        height: '2em',
        width: '2em',
        borderRadius: 15,
        margin: '1em',
        cursor: 'pointer'
    },
    bar: {
        border: 'solid',
        borderColor: 'black',
        borderWidth: '1px',
        marginTop: '3px'
    }
});