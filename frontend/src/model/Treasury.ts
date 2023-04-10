import { User } from './User';

export class Treasury {
    constructor(amount: number, date: Date) {
        this.amount_tre = amount;
        this.date_tre = date;
    }
    id_tre!: number;
    amount_tre: number;
    date_tre: Date;

    user!: User;

}