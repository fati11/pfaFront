import { Component, OnInit } from '@angular/core';
import {Prospect} from '../../model/Prospect';
import {HttpClient} from '@angular/common/http';
import {ProspectService} from '../../services/prospect.service';
import {Email} from '../../model/Email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
 prospect: any = new Prospect();
    public email: Email = new Email() ;
  constructor(public http: HttpClient , private prospectService: ProspectService) { }
  ngOnInit() {
      this.prospectService.getProspectById(Number(sessionStorage.getItem('idUser')))
          .subscribe(data => {
              this.prospect = data ;
              this.email.email = this.prospect.email;
              this.email.utilisateur = this.prospect;

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
            {email: this.prospect.email, texte: this.email.texte , subject: this.email.subject} )
            .subscribe(data => {
                alert('le mail a été envoyé avec succes');
               // sessionStorage.removeItem('idProspect');
                console.log(data);
            } , error => {console.log(error) ; }) ;
        this.prospectService.saveEmail(this.email).subscribe(data1 => {
            console.log(data1);
        } , error => {console.log(error) ; } ) ;

    }
}
