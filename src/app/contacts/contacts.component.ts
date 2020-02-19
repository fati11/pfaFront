import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact: Contact = new Contact() ;
  pageContact: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  // tslint:disable-next-line:max-line-length
  constructor(public http: HttpClient , public contactService: ContactService ,  private authenticationService: AuthentificationService , public router: Router) {
    console.log('init') ;
  }

  ngOnInit() {
  }
  doSearch( ) {
    this.contactService.getContactByMC(this.motCle , this.currentPage , this.size)
        .subscribe(data => {
          this.pageContact = data;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
  }
  chercher() {
    this.doSearch();
  }
  onDeleteProspect(p: Prospect) {
    const confirm = window.confirm('Etes vous sures??') ;
    // tslint:disable-next-line:triple-equals
    if (confirm == true) {
      this.contactService.deleteContact(p.id)
          .subscribe(data => {
            this.pageContact.content.splice(this.pageContact.content.indexOf(p), 1) ;
            console.log('supp') ;
          }, error => {
            console.log(error);
          });
    }
  }

  onUpdate(id: number) {
    this.router.navigate(['updateContact', id]);
  }

  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }

  onAffiche(id: number) {
    this.router.navigate(['affichageContact', id]);
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
