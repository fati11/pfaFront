import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {Role} from '../../model/Role';
import {ProspectService} from '../../services/prospect.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';
import {Utilisateur} from '../../model/Utilisateur';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  contact: any = new Contact();
  erreur = false;
  count: number;
  id: number;
  public role: Role = new Role();
  constructor(public contactService: ContactService , public http: HttpClient , private router: Router
      ,       private snackBar: MatSnackBar , public authenticationService: AuthentificationService
  ) {
  }

  ngOnInit() {
  }
  onSave() {
    const username = 'mohamed';
    const password = 'med';
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.role.roleName = 'contact';
    this.role.utilisateur = this.contact;
    this.contactService.saveContact(this.contact)
        .subscribe(data => {
          this.contact = data;
          console.log(this.contact.id);
          /**/
          this.router.navigate(['affichageContact', this.contact.id]);

            } , error => {console.log(error) ; }
        ) ;
  }
  emailErreur() {
    this.contactService.getCountEmail(this.contact.email).subscribe(data => {
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
