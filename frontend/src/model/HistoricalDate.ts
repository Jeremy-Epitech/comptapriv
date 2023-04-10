
export class HistoricalDate {
    constructor(amount: number, date: number) {
        this.month_h = amount;
        this.year_h = date;
    }

    id_h!: number;
    month_h: number;
    year_h: number;

}