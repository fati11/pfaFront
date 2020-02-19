import {Prospect} from './Prospect';
import {Contact} from './Contact';
import {Utilisateur} from './Utilisateur';

export class RDV {
    id: number;
    sujet: string;
    lieu: string;
    statut: string;
    dateDebut: Date;
    duree: any;
    description: string;
    utilisateur: Utilisateur;
    time: string;
}
