import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicAuthHtppInterceptorService} from './basic-auth-htpp-interceptor.service';
import {Prospect} from '../model/Prospect';
import {Role} from '../model/Role';
import {RDV} from '../model/RDV';
import {Email} from '../model/Email';
import {Contact} from '../model/Contact';
import {Affaire} from '../model/Affaire';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(public http: HttpClient , public basicAuthHtppInterceptorService: BasicAuthHtppInterceptorService  ) { }
  getContactByMC(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/contactByMC?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  saveContact(contact: Contact) {
    return this.http.post('http://localhost:8489/saveRoles', contact );
  }
  deleteContact(id: number) {
    return this.http.delete('http://localhost:8489/contact/' + id ); }
  getCountEmail(mail: string) {
    return this.http.get('http://localhost:8489/countMailContact?email=' + mail);
  }
  getContactById(id: number ) {
    return this.http.get('http://localhost:8489/contactG/' + id);
  }
  // tslint:disable-next-line:ban-types
  updateContact(contact: Contact) {
    return this.http.put('http://localhost:8489/updateContact/' + contact.id , contact );
  }
  saveRole(role: Role) {
    return this.http.post('http://localhost:8489/saveRoles', role );
  }
  chercherContact(username: string ) {
    return this.http.get('http://localhost:8489/chercherProspect?username=' + username );
  }
  getRoleByIdContact(id: number) {
    return this.http.get('http://localhost:8489/role/' + id);
  }
  saveRdv(rdv: RDV) {
    return this.http.post('http://localhost:8489/saveContactRdv', rdv );
  }
  saveContactEmail(email: Email) {
    return this.http.post('http://localhost:8489/emaile', email );
  }
  getEmailByIdProspect(id: number) {
    return this.http.get('http://localhost:8489/email/' + id);
  }
  getAffaireByIdContact(id: number) {
    return this.http.get('http://localhost:8489/affaire/' + id);
  }
  getEmailByMC(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/emailByMC?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  getRDVByMC(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/rdvByMC?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  saveAffaire(affaire: Affaire) {
    return this.http.post('http://localhost:8489/saveAffaire', affaire );
  }
  getAffaireByMC(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/affaireByMC?mc=' + motCle + '&page=' + page + '&size=' + size );
  }

  getAllAffaires(id: number , page: number , size: number) {
    return this.http.get('http://localhost:8489/mesAffaires/' + id + '?page=' + page + '&size=' + size);
  }
}
