import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import teston from '../styles/compte.module.css';
import { Tableau } from "../components/Tableau";
import { Transactions } from "../model/Transactions";


export class Compte extends React.Component {
    transactions: Transactions[] = [];

    constructor(props: {}) {
        super(props)
        this.transactions.push(new Transactions(1300, true, false), new Transactions(100, false, true))
    }

    render() {
        console.log(teston)
        return (
            <View style={styles.container}>
                <button style={{ height: '20px' }} onClick={() => { this.transactions.push(new Transactions(1300, true, false)); console.log(this.transactions) }} />
                <Tableau transactions={this.transactions} />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        border: '3px solid blue',
        margin: '0.5em',
        padding: '0.5em'
    },
});