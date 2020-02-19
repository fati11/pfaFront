import {Prospect} from './Prospect';
import {Contact} from './Contact';
import {Utilisateur} from './Utilisateur';

export class Email {
    public email: string;
    public texte: string;
    public subject: string;
    public utilisateur: Utilisateur;
    public date: Date;
}
