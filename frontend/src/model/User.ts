import { Transactions } from './Transactions';
import { Treasury } from './Treasury';

export class User {
    constructor(firstName: string, email: string) {
        this.firstName_u = firstName;
        this.email_u = email;
    }

    id_u!: number;
    firstName_u: string;
    lastName_u!: string;
    email_u: string;

    transaction!: Transactions[];

    treasury!: Treasury[];

}