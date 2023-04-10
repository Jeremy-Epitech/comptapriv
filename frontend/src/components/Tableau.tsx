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

    render() {
        console.log(cs)

        return (
            <View style={styles.container}>
                <table className="table">
                    <thead className="head">
                        <tr>
                            {Object.keys(this.props.transactions[0]).map((listValue, index) => {
                                return (
                                    <th key={index}>{listValue}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.amount_tra}</td>
                                    <td>{listValue.isOut_tra.toString()}</td>
                                    <td>{listValue.isRecurrent_tra.toString()}</td>
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