import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany } from 'typeorm';
import { Transaction } from './Transaction';
import { Treasury } from './Treasury';

@Entity()
export class User extends BaseEntity {
    constructor(firstName: string, email: string) {
        super();
        this.firstName_u = firstName;
        this.email_u = email;
    }

    @PrimaryGeneratedColumn()
    id_u!: number;

    @Column({
        length: 50,
    })
    firstName_u: string;

    @Column({
        length: 50,
        nullable: true
    })
    lastName_u!: string;

    @Column({
        length: 100,
        unique: true
    })
    email_u: string;

    @Column({
        nullable: true
    })
    password_u!: string;

    @OneToMany(() => Transaction, (transaction: Transaction) => transaction.user)
    transaction!: Transaction[];

    @OneToMany(() => Treasury, (treasury: Treasury) => treasury.user)
    treasury!: Treasury[];

}