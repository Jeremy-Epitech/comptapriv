import { HistoricalDate } from './HistoricalDate';
import { User } from './User';


export class Transactions {
    constructor(label: string, amount: number, isOut: boolean, isRecurrent: boolean) {
        this.label_tra = label;
        this.amount_tra = amount;
        this.isOut_tra = isOut;
        this.isRecurrent_tra = isRecurrent;
    }

    id_tra!: number;
    label_tra: string;
    amount_tra: number;
    isRecurrent_tra: boolean;
    isOut_tra: boolean;

    user!: User;

    HistorycalDate!: HistoricalDate;

}