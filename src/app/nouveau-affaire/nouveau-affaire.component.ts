import { Component, OnInit } from '@angular/core';
import {RDV} from '../../model/RDV';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProspectService} from '../../services/prospect.service';
import {Affaire} from '../../model/Affaire';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-nouveau-affaire',
  templateUrl: './nouveau-affaire.component.html',
  styleUrls: ['./nouveau-affaire.component.css']
})
export class NouveauAffaireComponent implements OnInit {
  affaire: any = new Affaire();
  public contact: any = new Contact();
  idContact: number;
  constructor(public http: HttpClient , private router: Router , public contactService: ContactService) {
    this.idContact = Number(sessionStorage.getItem('idContact'));
  }

  ngOnInit() {
    this.contactService.getContactById(this.idContact)
        .subscribe(data => {
          this.contact = data ;
          this.affaire.contact = this.contact;
          console.log(this.contact);
        }, error => {
          console.log(error) ;
        });
  }
  envoyer() {
    this.contactService.saveAffaire(this.affaire).subscribe(data1 => {
      console.log(data1);
    } , error => {console.log(error) ; } ) ;
  }

}
