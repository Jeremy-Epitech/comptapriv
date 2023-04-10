import { HistoricalDate } from './HistoricalDate';
import { User } from './User';


export class Transactions {
    constructor(amount: number, isOut: boolean, isRecurrent: boolean) {
        this.amount_tra = amount;
        this.isOut_tra = isOut;
        this.isRecurrent_tra = isRecurrent;
    }

    id_tra!: number;
    amount_tra: number;
    isOut_tra: boolean;
    isRecurrent_tra: boolean;

    user!: User;

    HistorycalDate!: HistoricalDate;

}