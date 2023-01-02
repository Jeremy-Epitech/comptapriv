import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Treasury extends BaseEntity {
    constructor(amount: number, date: Date) {
        super();
        this.amount_tre = amount;
        this.date_tre = date;
    }

    @PrimaryGeneratedColumn()
    id_tre!: number;

    // @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    @Column("decimal", { precision: 15, scale: 2 })
    amount_tre: number;

    @Column()
    date_tre: Date;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

}