import {Utilisateur} from './Utilisateur';
import {Role} from './Role';

export class Prospect extends Utilisateur  {
    id: number;
    nom: string;
    prenom: string;
    sexe: string;
    telephone: string;
    dateNaissance: Date;
    mobile: string;
    titre: string;
    sourceProspect: string;
    email: string;
    fax: string;
    secteur: string;
    statut: string;
     note: string;
     assigneA: string;
     nonMail: boolean;
     adressePrincipale: string;
     ville: string;
     pays: string;
     codePostale: string;
     etatDep: string;
     password: string;
     type: string;
     role: Role;
}
