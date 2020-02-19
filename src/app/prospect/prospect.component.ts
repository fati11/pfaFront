import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UpdateProspectComponent} from '../update-prospect/update-prospect.component';
import {NouveauProspectComponent} from '../nouveau-prospect/nouveau-prospect.component';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {
  prospect: Prospect = new Prospect() ;
  pageProspect: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  // tslint:disable-next-line:max-line-length
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router , public authenticationService: AuthentificationService) {
    console.log('init') ;
  }

  ngOnInit() {
  }
  doSearch( ) {
    this.prospectService.getProspectByMC(this.motCle , this.currentPage , this.size)
        .subscribe(data => {
          this.pageProspect = data;
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
      this.prospectService.deleteProspect(p.id)
          .subscribe(data => {
            this.pageProspect.content.splice(this.pageProspect.content.indexOf(p), 1) ;
            console.log('supp') ;
          }, error => {
            console.log(error);
          });
    }
  }

  onUpdate(id: number) {
    this.router.navigate(['updateProspect', id]);
  }

  gotoPage(i: number) {
    this.currentPage = i ;
    this.doSearch();
  }

  onAffiche(id: number) {
    this.router.navigate(['affichageProspect', id]);
  }
  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
  }
}
