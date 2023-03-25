import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    <h1>Welcome to the home page</h1>
                    <p>Mathafack</p>
                </Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});