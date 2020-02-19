import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {ActivatedRoute, Router} from '@angular/router';
import {ProspectService} from '../../services/prospect.service';
import {AuthentificationService} from '../../services/authentification.service';


@Component({
  selector: 'app-update-prospect',
  templateUrl: './update-prospect.component.html',
  styleUrls: ['./update-prospect.component.css']
})
export class UpdateProspectComponent implements OnInit {
  mode = 1;
  idProspect: number ;
  public prospect: any = new Prospect() ;
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public prospectService: ProspectService , public router: Router ,
              public authenticationService: AuthentificationService) {
    this.idProspect = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.prospectService.getProspectById(this.idProspect)
        .subscribe(data => {
          this.prospect = data ;
        }, error => {
          console.log(error) ;
        });

  }

  onUpdate() {
    this.prospectService.updateProspect(this.prospect)
        .subscribe(data => {
          console.log(this.prospect);
          alert('mise à jour effectuée');
          this.router.navigate(['nouveauProspect']);
        }, error => {
          console.log(error);
          alert('Probléme!!!') ;
        });
  }
    logOut() {
        this.authenticationService.logOut();
        this.router.navigate(['logout']);
    }
}
