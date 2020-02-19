import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {ProspectService} from '../../services/prospect.service';
import {EmailComponent} from '../email/email.component';
import {AuthentificationService} from '../../services/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Prospect} from '../../model/Prospect';
import {RdvComponent} from '../rdv/rdv.component';
import {MesRdvComponent} from '../mes-rdv/mes-rdv.component';
import {MesEmailsComponent} from '../mes-emails/mes-emails.component';
import {EmailPopupComponent} from '../email-popup/email-popup.component';
import {RdvPopupComponent} from '../rdv-popup/rdv-popup.component';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';
@Component({
  selector: 'app-affichage-prospect',
  templateUrl: './affichage-prospect.component.html',
  styleUrls: ['./affichage-prospect.component.css']
})
export class AffichageProspectComponent implements OnInit {
idProspect: number;
prospect: any = new Prospect();
contact: any = new Contact();
  // tslint:disable-next-line:max-line-length
  constructor( public activatedRoute: ActivatedRoute , public dialog: MatDialog , private authenticationService: AuthentificationService , private router: Router
  ,            public prospectService: ProspectService , public contactService: ContactService
  ) {
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


  openDialog(): void {
      sessionStorage.setItem('idUser', this.prospect.id);
      const dialogRef = this.dialog.open(EmailComponent, {
      height: '400px',
      width: '1000px',
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

  onDeleteProspect(p: Prospect) {
    const confirm = window.confirm('Etes vous sures??') ;
    // tslint:disable-next-line:triple-equals
    if (confirm == true) {
      this.prospectService.deleteProspect(p.id)
          .subscribe(data => {
            console.log('supp') ;
          }, error => {
            console.log(error);
          });
    }
  }

  onUpdate() {
    this.router.navigate(['updateProspect', this.prospect.id]);
  }

    ajoutRDV(): void {
            sessionStorage.setItem('idUser', this.prospect.id);
            const dialogRef = this.dialog.open(RdvComponent, {
            height: '400px',
            width: '1000px',
        });

            dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    convert() {
      this.contact.nom = this.prospect.nom;
      this.contact.prenom = this.prospect.prenom;
      this.contact.adressePrincipal = this.prospect.adressePrincipale;
      this.contact.email = this.prospect.email;
      this.contact.assigneA = this.prospect.assigneA;
      this.contact.ville = this.prospect.ville;
      this.contact.pays =  this.prospect.pays;
      this.contact.password = this.prospect.password;
      this.contact.sexe = this.prospect.sexe;
      this.contact.mobile = this.prospect.mobile;
      this.contact.fonction = this.prospect.etatDep;
      this.contact.username = this.prospect.username;
      this.contact.dateNaissance = this.prospect.dateNaissance;
      this.contact.role = this.prospect.role;
      this.contactService.saveContact(this.contact).subscribe(
    res => {
        console.log(res);
    } , error => {
        console.log(error);
    });
    }

    emailEnvoye() {
        sessionStorage.setItem('idUser', this.prospect.id);
        const dialogRef = this.dialog.open(EmailPopupComponent, {
            height: '400px',
            width: '1000px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    rdvEnvoye() {
        sessionStorage.setItem('idUser', this.prospect.id);
        const dialogRef = this.dialog.open(RdvPopupComponent, {
            height: '400px',
            width: '1000px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
