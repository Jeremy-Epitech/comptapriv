import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { HistoricalDate } from './HistoricalDate';
import { User } from './User';

@Entity()
export class Transaction extends BaseEntity {
    constructor(amount: number, isOut: boolean, isRecurrent: boolean) {
        super();
        this.amount_tra = amount;
        this.isOut_tra = isOut;
        this.isRecurrent_tra = isRecurrent;
    }

    @PrimaryGeneratedColumn()
    id_tra!: number;

    // @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    @Column("decimal", { precision: 15, scale: 2 })
    amount_tra: number;

    @Column()
    isOut_tra: boolean;

    @Column()
    isRecurrent_tra: boolean;

    @ManyToOne(() => User, (user) => user.transaction)
    user!: User;

    @OneToOne(() => HistoricalDate)
    @JoinColumn()
    HistorycalDate!: HistoricalDate;

}