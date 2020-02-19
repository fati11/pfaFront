import { Component, OnInit } from '@angular/core';
import {RDV} from '../../model/RDV';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProspectService} from '../../services/prospect.service';
import {Prospect} from '../../model/Prospect';
import {Contact} from '../../model/Contact';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
rdv: any = new RDV();
public prospect: any = new Prospect();
idProspect: number;
  constructor(public http: HttpClient , private router: Router , public prospectService: ProspectService) {
    this.idProspect = Number(sessionStorage.getItem('idUser'));

  }

  ngOnInit() {
    this.prospectService.getProspectById(this.idProspect)
        .subscribe(data => {
          this.prospect = data ;
          this.rdv.utilisateur = this.prospect;
          console.log(this.prospect);
        }, error => {
          console.log(error) ;
        });
  }
  envoyer() {
      this.prospectService.saveRdv(this.rdv).subscribe(data1 => {
      console.log(data1);
    } , error => {console.log(error) ; } ) ;
  }
}
