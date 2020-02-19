import { Component, OnInit } from '@angular/core';
import {Email} from '../../model/Email';
import {Utilisateur} from '../../model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {Affaire} from '../../model/Affaire';
import {Contact} from '../../model/Contact';

@Component({
  selector: 'app-affaire-popup',
  templateUrl: './affaire-popup.component.html',
  styleUrls: ['./affaire-popup.component.css']
})
export class AffairePopupComponent implements OnInit {

  affaire: Affaire = new Affaire() ;
  pageAffaire: any;
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  utilisateur: Contact = new Contact();
  id: number;
  constructor(public http: HttpClient , public contactService: ContactService , public router: Router) {
    this.id = Number(sessionStorage.getItem('idUser'));

  }

  ngOnInit() {
    this.chercher();
  }
  doSearch( ) {
    this.contactService.getAllAffaires(this.id , this.currentPage , this.size)
        .subscribe(data => {
          this.pageAffaire = data;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
  }
  chercher() {
    this.doSearch();
  }

  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }

}
