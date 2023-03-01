import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index } from 'typeorm';

@Entity()
@Index(['month_h', 'year_h'], { unique: true })
export class HistoricalDate extends BaseEntity {
    constructor(amount: number, date: number) {
        super();
        this.month_h = amount;
        this.year_h = date;
    }

    @PrimaryGeneratedColumn()
    id_h!: number;

    @Column({ unique: true })
    month_h: number;

    @Column({ unique: true })
    year_h: number;

}