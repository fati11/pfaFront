import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Role} from '../../model/Role';
import {Router} from '@angular/router';
import {ProspectService} from '../../services/prospect.service';
import {AuthentificationService} from '../../services/authentification.service';
import {Prospect} from '../../model/Prospect';
import {MatSnackBar} from '@angular/material';
import {Utilisateur} from '../../model/Utilisateur';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model: any = {} ;
  invalidLogin = false ;
  loading = false;
  error = '';
  role: any = new Role();
  public utilisateur: any = new Utilisateur();
  constructor(private viewportScroller: ViewportScroller , private router: Router,
              private loginservice: AuthentificationService , public utilisateurService: ProspectService , private snackBar: MatSnackBar
              ) { }

  ngOnInit() {
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  checkLogin() {
    this.loginservice.authenticate(this.model.username, this.model.password).subscribe(
        data => {
          sessionStorage.setItem('username', this.model.username);
          const tokenStr =  data.token;
          sessionStorage.setItem('token', tokenStr);
          this.invalidLogin = false ;
          this.utilisateurService.chercherUser(this.model.username).subscribe(data1 => {
            this.utilisateur = data1;
            this.utilisateurService.getRoleByIdUser(this.utilisateur.id).subscribe(data2 => {
              this.role = data2 ;
              console.log(this.role.roleName) ;
              // tslint:disable-next-line:triple-equals
              if (this.role.roleName == 'admin') {
                this.router.navigate(['homeAdmin']);
              } else {
                  sessionStorage.setItem('email', this.model.username);
                  this.router.navigate(['home']);
              }
            });
          } , error1 => {
            console.log(error1);
          }) ;
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.openSnackBar('username or password is incorrect', '' );
        }
    );
  }
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
