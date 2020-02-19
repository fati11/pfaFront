import {RDV} from './RDV';
import {Role} from './Role';

export class Utilisateur {
    id: number;
    username: string;
    password: string;
    dateCreation: Date;
    rdv: RDV;
}
