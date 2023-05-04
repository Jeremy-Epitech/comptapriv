import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import teston from '../styles/compte.module.css';
import { Tableau } from "../components/Tableau";
import { Transactions } from "../model/Transactions";
import { BACK_HOSTNAME, BACK_PORT } from '@env';

export class Compte extends React.Component<{}, { transactions: Transactions[] }> {
    transactions: Transactions[] = [];

    constructor(props: {}) {
        super(props)
        this.state = {
            transactions: []
        }
        console.log(BACK_HOSTNAME)
    }

    // Pour du refactor de tableau > Generique ?
    // initValue(): string[] {
    //     let values: string[] = []
    //     this.state.transactions.map((item) => {
    //         values.push(item.label_tra, item.amount_tra.toString(), item.isRecurrent_tra ? 'Oui' : 'Non')
    //     })
    //     console.log(values)
    //     return values
    // }

    async getTransactions() {
        try {
            const response = await fetch(`${BACK_HOSTNAME}:${BACK_PORT}/users/1/transactions`);
            const json: Transactions[] = await response.json();
            console.log(json)
            this.setState({ transactions: json });
        } catch (error) {
            console.log(error);
        } finally {
            // this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getTransactions();
    }

    render() {
        console.log(teston)
        return (
            <View style={styles.container}>
                {/* <button style={{ height: '20px' }} onClick={() => { this.setState({ transactions: [...this.state.transactions, new Transactions('salo', 1300.32, true, false)] }); console.log(this) }} />   */}
                <Tableau transactions={this.state.transactions} />
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