import { Component, OnInit } from '@angular/core';
import {Email} from '../../model/Email';
import {Utilisateur} from '../../model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';
import {RDV} from '../../model/RDV';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  email: Email = new Email() ;
  pageEmail: any;
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  utilisateur: any = new Utilisateur();
  id: number;
  pageRDV: any;
  motCle = '';
  currentPage1 = 0;
  size1 = 5;
  pages1: Array<number> ;
  rdv: any = new RDV();
  idProspect: number;
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router ,
              private authenticationService: AuthentificationService ) {
  }
  ngOnInit() {
    this.prospectService.chercherUser(sessionStorage.getItem('email'))
        .subscribe(data1 => {
          this.utilisateur = data1;
          this.id = Number(this.utilisateur.id);
          this.doSearch();
          this.doSearch1();
          console.log(this.utilisateur);
        } , error => {
          console.log(error);
        } ) ;
     }
  doSearch( ) {
    this.prospectService.getAllEmails(this.id , this.currentPage , this.size)
        .subscribe(data => {
          this.pageEmail = data;
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

    logOut() {
        this.authenticationService.logOut();
        this.router.navigate(['login']);
    }

  doSearch1( ) {
    this.prospectService.getRdvById(this.id , this.currentPage , this.size)
        .subscribe(data => {
          this.pageRDV = data;
          // @ts-ignore
          this.pages = new Array<number>(data.totalPages);
        }, error => {
          console.log(error);
        } ) ;
  }
  chercher1() {
    this.doSearch();
  }
  gotoPage1(i: number) {
    this.currentPage1 = i ;
    this.doSearch1();
  }
}
