import { Component, OnInit } from '@angular/core';
import {Email} from '../../model/Email';
import {RDV} from '../../model/RDV';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rdv-popup',
  templateUrl: './rdv-popup.component.html',
  styleUrls: ['./rdv-popup.component.css']
})
export class RdvPopupComponent implements OnInit {
  pageRDV: any;
  currentPage = 0;
  size = 5;
  pages: Array<number> ;
  rdv: any = new RDV();
  idProspect: number;
  constructor(public http: HttpClient , public prospectService: ProspectService , public router: Router) {
    console.log('init') ;
    this.idProspect = Number(sessionStorage.getItem('idUser'));
  }

  ngOnInit() {
    this.doSearch();
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
