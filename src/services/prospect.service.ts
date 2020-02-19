import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Prospect} from '../model/Prospect';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Role} from '../model/Role';
import {BasicAuthHtppInterceptorService} from './basic-auth-htpp-interceptor.service';
import {RDV} from '../model/RDV';
import {Email} from '../model/Email';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  constructor(public http: HttpClient , public basicAuthHtppInterceptorService: BasicAuthHtppInterceptorService  ) { }
  getProspectByMC(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/prospectByMC?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  saveProspect(prospect: Prospect) {
    return this.http.post('http://localhost:8489/saveProspect', prospect );
  }
  deleteProspect(id: number) {
    return this.http.delete('http://localhost:8489/prospect/' + id ); }
  getCountEmail(mail: string) {
    return this.http.get('http://localhost:8489/countMail?email=' + mail);
  }
  getProspectById(id: number ) {
    return this.http.get('http://localhost:8489/prospectG/' + id);
  }
  // tslint:disable-next-line:ban-types
  updateProspect(prospect: Prospect) {
    return this.http.put('http://localhost:8489/updateProspect/' + prospect.id , prospect );
  }
  saveRole(role: Role) {
    return this.http.post('http://localhost:8489/roles', role );
  }
  saveProspects(prospect: Prospect) {
    return this.http.post('http://localhost:8489/roles', prospect );
  }
  chercherProspect(username: string ) {
    return this.http.get('http://localhost:8489/chercherProspect?username=' + username );
  }
  chercherUser(username: string ) {
    return this.http.get('http://localhost:8489/chercherUserName?username=' + username );
  }
  getRoleByIdUser(id: number) {
    return this.http.get('http://localhost:8489/role/' + id);
  }
  saveRdv(rdv: RDV) {
    return this.http.post('http://localhost:8489/saveRdv', rdv );
  }
  saveEmail(email: Email) {
    return this.http.post('http://localhost:8489/emailes', email );
  }
  getEmailByIdProspect(id: number) {
    return this.http.get('http://localhost:8489/email/' + id);
  }
  getEmailByMC(motCle: string , page: number , size: number ) {
    return this.http.get('http://localhost:8489/emailByMC?mc=' + motCle + '&page=' + page + '&size=' + size );
  }
  getRDVByMC(page: number , size: number ) {
    return this.http.get('http://localhost:8489/rdvByMC?page='  + page + '&size=' + size );
  }
  getRdvById(id: number, page: number , size: number) {
    return this.http.get('http://localhost:8489/rdv/' + id + '?page=' + page + '&size=' + size );
  }
  getAllEmails(id: number , page: number , size: number) {
    return this.http.get('http://localhost:8489/mesEmails/' + id + '?page=' + page + '&size=' + size);
  }
getAllEmailsOrder(email: string , page: number , size: number) {
    return this.http.get('http://localhost:8489/getAllEmailsOrder?email=' + email + '&page=' + page + '&size=' + size);
}
}
