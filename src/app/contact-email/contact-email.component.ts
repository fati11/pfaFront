import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {Email} from '../../model/Email';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Contact} from '../../model/Contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.css']
})
export class ContactEmailComponent implements OnInit {
  contact: any = new Contact();
  public email: any = new Email() ;
  idContact: number;
  prospect: any = new Prospect();
  constructor(public http: HttpClient , public contactService: ContactService) {
    this.idContact = Number(sessionStorage.getItem('idContact'));

  }
  ngOnInit() {
      const now = Date.now();
      this.contactService.getContactById(this.idContact)
          .subscribe(data2 => {
              console.log(data2);
              this.contact = data2 ;
              this.email.email = this.contact.email;
              this.email.contact = this.contact;
              this.email.date = now ;
          }, error => {
              console.log(error) ;
          });

  }

  onClear() {

  }

  onSubmit() {

  }

  onClose() {

  }

  onNoClick() {

  }

  envoyer() {
      this.http.post('http://localhost:8489/sendMail',
          // tslint:disable-next-line:max-line-length
          {email: this.contact.email, texte: this.email.texte , subject: this.email.subject} )
          .subscribe(data => {
              alert('le mail a été envoyé avec succes');
              // sessionStorage.removeItem('idProspect');
          } , error => {console.log(error) ; }) ;
      this.contactService.saveContactEmail(this.email).subscribe(data1 => {
console.log(data1);
} , error => {console.log(error) ; } ) ;
  }

}
