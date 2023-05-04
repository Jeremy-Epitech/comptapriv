import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Transactions } from "../model/Transactions";
import cs from '../styles/tableau.module.css'

export class Tableau extends React.Component<tableau> {

    constructor(props: tableau) {
        super(props);
        // this.state = {
        //     transactions: Transactions,
        // };
        console.log(this)
    }

    showTransactions(listValue: Transactions, index: number) {
        return (
            <tr key={index} className={listValue.isOut_tra ? 'debit' : 'credit'}>
                <td>{listValue.label_tra}</td>
                <td>{listValue.amount_tra}</td>
                <td>{listValue.isRecurrent_tra.toString()}</td>
                <td>{listValue.isOut_tra.toString()}</td>
            </tr>
        );
    }

    render() {
        console.log(cs)
        if (this.props.transactions && this.props.transactions.length > 0) {
            return (
                <View style={styles.container}>
                    <table className="styled-table">
                        {/* <thead className="head"> */}
                        <thead >
                            <tr>
                                <th>Label</th>
                                <th>Montant</th>
                                <th>Récurrent ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.transactions.map((listValue, index) => {
                                return (
                                    <tr key={index} className={listValue.isOut_tra ? 'debit' : 'credit'}>
                                        <td>{listValue.label_tra}</td>
                                        <td>{listValue.amount_tra}</td>
                                        <td>{listValue.isRecurrent_tra ? 'Oui' : 'Non'}</td>
                                        {/* <td>{listValue.isOut_tra.toString()}</td> */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {/* <Text>
                    {this.props.transactions[0].amount_tra}
                </Text> */}
                </View >
            )
        }
        else {
            return (
                <View>
                    <Text>
                        Aucune données
                    </Text>
                </View >
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        border: '3px solid',
        margin: '0.5em',
        padding: '0.5em'
    },
});

type tableau = {
    transactions: Transactions[]
}