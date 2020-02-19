import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Email} from '../../model/Email';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-mes-emails',
  templateUrl: './mes-emails.component.html',
  styleUrls: ['./mes-emails.component.css']
})
export class MesEmailsComponent implements OnInit {

  email: Email = new Email() ;
  pageEmail: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  prospect: any = new Prospect();
  // tslint:disable-next-line:max-line-length
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router , public authenticationService: AuthentificationService) {
    console.log('init') ;
  }

  ngOnInit() {
  }

    logOut() {
      this.authenticationService.logOut();
      this.router.navigate(['logout']);

    }
  doSearch( ) {
    this.prospectService.getEmailByMC(this.motCle , this.currentPage , this.size)
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
