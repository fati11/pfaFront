import { Component, OnInit } from '@angular/core';
import {RDV} from '../../model/RDV';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProspectService} from '../../services/prospect.service';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-rdv',
  templateUrl: './contact-rdv.component.html',
  styleUrls: ['./contact-rdv.component.css']
})
export class ContactRdvComponent implements OnInit {

  rdv: any = new RDV();
  public contact: any = new Contact();
  idContact: number;
  constructor(public http: HttpClient , private router: Router , public contactService: ContactService) {
    this.idContact = Number(sessionStorage.getItem('idContact'));

  }

  ngOnInit() {
    this.contactService.getContactById(this.idContact)
        .subscribe(data => {
          this.contact = data ;
          this.rdv.contact = this.contact;
        }, error => {
          console.log(error) ;
        });
  }
  envoyer() {
    this.contactService.saveRdv(this.rdv).subscribe(data1 => {
      console.log(data1);
    } , error => {console.log(error) ; } ) ;
  }
}
