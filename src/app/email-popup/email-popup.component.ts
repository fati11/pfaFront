import { Component, OnInit } from '@angular/core';
import {Email} from '../../model/Email';
import {Utilisateur} from '../../model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email-popup',
  templateUrl: './email-popup.component.html',
  styleUrls: ['./email-popup.component.css']
})
export class EmailPopupComponent implements OnInit {
  email: Email = new Email() ;
  pageEmail: any;
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  utilisateur: Utilisateur = new Utilisateur();
  id: number;
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router) {
    this.id = Number(sessionStorage.getItem('idUser'));

  }

  ngOnInit() {
    this.chercher();
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
}
