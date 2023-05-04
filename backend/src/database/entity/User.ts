import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from 'typeorm';
import { Transactions } from './Transactions';
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
        select: false,
        nullable: true
    })
    password_u!: string;

    @ManyToMany(() => Transactions, (transaction: Transactions) => transaction.user)
    transaction!: Transactions[];

    @ManyToMany(() => Treasury, (treasury: Treasury) => treasury.user)
    treasury!: Treasury[];

}