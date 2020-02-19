import {Contact} from './Contact';

export class Affaire {
    id: number;
    nomAffaire: string;
    relatifA: string;
    montant: number;
    dateEcheance: Date;
    assigneA: string;
    phaseVente: string;
    probabilite: string;
    contact: Contact;
}
