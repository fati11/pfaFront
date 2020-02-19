import {Utilisateur} from './Utilisateur';
import {Role} from './Role';
export class Contact extends Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    sexe: string;
    telephone: string;
    fonction: string;
    sourceProspect: string;
    email: string;
    fax: string;
    assigneA: string;
    adressePrincipal: string;
    ville: string;
    pays: string;
    codePostale: string;
    dateNaissance: Date;
    type: string;
    interessePar: string;
    description: string;
    role: Role;

}
