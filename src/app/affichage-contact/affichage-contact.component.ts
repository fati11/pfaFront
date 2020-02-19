import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AuthentificationService} from '../../services/authentification.service';
import {ProspectService} from '../../services/prospect.service';
import {EmailComponent} from '../email/email.component';
import {RdvComponent} from '../rdv/rdv.component';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';
import {ContactRdvComponent} from '../contact-rdv/contact-rdv.component';
import {ContactEmailComponent} from '../contact-email/contact-email.component';
import {NouveauAffaireComponent} from '../nouveau-affaire/nouveau-affaire.component';
import {EmailPopupComponent} from '../email-popup/email-popup.component';
import {RdvPopupComponent} from '../rdv-popup/rdv-popup.component';
import {RdvPopupContactComponent} from '../rdv-popup-contact/rdv-popup-contact.component';
import {EmailPopupContactComponent} from '../email-popup-contact/email-popup-contact.component';
import {AffairePopupComponent} from '../affaire-popup/affaire-popup.component';
import {Client} from '../../model/Client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-affichage-contact',
  templateUrl: './affichage-contact.component.html',
  styleUrls: ['./affichage-contact.component.css']
})
export class AffichageContactComponent implements OnInit {

  idContact: number;
  contact: any = new Contact();
  client: any = new Client();
  // tslint:disable-next-line:max-line-length
  constructor( public activatedRoute: ActivatedRoute , public dialog: MatDialog , private authenticationService: AuthentificationService , private router: Router
      ,        public contactService: ContactService , public clientService: ClientService
  ) {
    this.idContact = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.contactService.getContactById(this.idContact)
        .subscribe(data => {
          this.contact = data ;
          console.log(this.idContact);
        }, error => {
          console.log(error) ;
        });
  }


  openDialog(): void {
    sessionStorage.setItem('idContact', this.contact.id);
    const dialogRef = this.dialog.open(ContactEmailComponent, {
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
      this.contactService.deleteContact(p.id)
          .subscribe(data => {
            console.log('supp') ;
          }, error => {
            console.log(error);
          });
    }
  }

  onUpdate() {
    this.router.navigate(['updateContact', this.contact.id]);
  }

  ajoutRDV(): void {
    sessionStorage.setItem('idContact', this.contact.id);
    const dialogRef = this.dialog.open(ContactRdvComponent, {
      height: '400px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  convert() {
    this.client.nom = this.contact.nom ;
    this.client.prenom = this.contact.prenom ;
    this.client.adressePrincipal =  this.contact.adressePrincipal ;
    this.client.email = this.contact.email ;
    this.client.assigneA = this.contact.assigneA ;
    this.client.ville = this.contact.ville ;
    this.client.pays = this.contact.pays ;
    this.client.password = this.contact.password ;
    this.client.sexe = this.contact.sexe ;
    this.client.mobile = this.contact.mobile ;
    this.client.fonction = this.contact.fonction ;
    this.client.username = this.contact.username ;
    this.client.dateNaissance = this.contact.dateNaissance ;
    this.client.role = this.contact.role ;
    this.clientService.saveClient(this.client).subscribe(
        res => {
          console.log(res);
        } , error => {
          console.log(error);
        });
  }

    ajoutAffaire() {
      sessionStorage.setItem('idContact', this.contact.id);
      const dialogRef = this.dialog.open(NouveauAffaireComponent, {
        height: '400px',
        width: '900px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  mesEmails() {
    sessionStorage.setItem('idUser', this.contact.id);
    const dialogRef = this.dialog.open(EmailPopupContactComponent, {
      height: '400px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  mesRdv() {
    sessionStorage.setItem('idUser', this.contact.id);
    const dialogRef = this.dialog.open(RdvPopupContactComponent, {
      height: '400px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

    mesAffaires() {
      sessionStorage.setItem('idUser', this.contact.id);
      const dialogRef = this.dialog.open(AffairePopupComponent, {
        height: '400px',
        width: '1000px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}
