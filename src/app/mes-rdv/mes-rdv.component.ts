import { Component, OnInit } from '@angular/core';
import {Email} from '../../model/Email';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';
import {RDV} from '../../model/RDV';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-mes-rdv',
  templateUrl: './mes-rdv.component.html',
  styleUrls: ['./mes-rdv.component.css']
})
export class MesRdvComponent implements OnInit {
  email: Email = new Email() ;
  pageRDV: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  rdv: any = new RDV();
  idProspect: number;
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router ,
              private authenticationService: AuthentificationService) {
    console.log('init') ;
    this.idProspect = Number(sessionStorage.getItem('idUser'));
  }

  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);

  }
  doSearch( ) {
    this.prospectService.getRdvById(this.idProspect , this.currentPage , this.size)
        .subscribe(data => {
          this.pageRDV = data;
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
