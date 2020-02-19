import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {ActivatedRoute, Router} from '@angular/router';
import {ProspectService} from '../../services/prospect.service';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  mode = 1;
  idContact: number ;
  public contact: any = new Contact() ;
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute , public contactService: ContactService , public router: Router
  ,           public authenticationService: AuthentificationService
  ) {
    this.idContact = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit() {
    this.contactService.getContactById(this.idContact)
        .subscribe(data => {
          this.contact = data ;
        }, error => {
          console.log(error) ;
        });

  }

  onUpdate() {
    this.contactService.updateContact(this.contact)
        .subscribe(data => {
          console.log(this.contact);
          alert('mise à jour effectuée');
          this.router.navigate(['nouveauContact']);
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
