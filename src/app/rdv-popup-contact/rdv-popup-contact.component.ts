import { Component, OnInit } from '@angular/core';
import {RDV} from '../../model/RDV';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rdv-popup-contact',
  templateUrl: './rdv-popup-contact.component.html',
  styleUrls: ['./rdv-popup-contact.component.css']
})
export class RdvPopupContactComponent implements OnInit {

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
