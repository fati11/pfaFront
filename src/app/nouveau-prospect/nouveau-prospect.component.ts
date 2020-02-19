import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {ProspectService} from '../../services/prospect.service';
import {HttpClient} from '@angular/common/http';
import {Role} from '../../model/Role';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-nouveau-prospect',
  templateUrl: './nouveau-prospect.component.html',
  styleUrls: ['./nouveau-prospect.component.css']
})
export class NouveauProspectComponent implements OnInit {
  prospect: any = new Prospect();
  erreur = false;
  count: number;
  public role: Role = new Role();
  constructor(public prospectService: ProspectService , public http: HttpClient , private router: Router
  ,           private snackBar: MatSnackBar , public authenticationService: AuthentificationService
  ) {
      this.role.utilisateur = this.prospect;
  }

  ngOnInit() {
  }
    onSave() {
        const username = 'mohamed';
        const password = 'med';
        // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        this.role.roleName = 'prospect';
        this.role.utilisateur = this.prospect;
        this.prospectService.saveProspects(this.prospect)
            .subscribe(data => {
                    this.prospect = data;
                    console.log(this.prospect.id);
                    /**/
                    this.router.navigate(['affichageProspect', this.prospect.id]);

                } , error => {console.log(error) ; }
            ) ;
    }
  emailErreur() {
                  this.prospectService.getCountEmail(this.prospect.email).subscribe(data => {
      this.count = Number(console.log(data));
      // tslint:disable-next-line:triple-equals
      if (this.count != 0 ) {this.openSnackBar() ; }
    }, error => {
      console.log(error);
    });
  }
  openSnackBar() {
    this.snackBar.open('email existe deja', '', {
      duration: 400,
    });
  }

    logOut() {
        this.authenticationService.logOut();
        this.router.navigate(['logout']);
    }
}
