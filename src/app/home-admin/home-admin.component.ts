import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';
import {Email} from '../../model/Email';
import {RDV} from '../../model/RDV';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  email: Email = new Email() ;
  pageRDV: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  rdv: any = new RDV();
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router ,
              private authenticationService: AuthentificationService ) {
    console.log('init') ;
  }

  ngOnInit() {
    this.doSearch();
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
  doSearch( ) {
    this.prospectService.getRDVByMC(this.currentPage , this.size)
        .subscribe(data => {
          this.pageRDV = data;
          console.log(data);
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
