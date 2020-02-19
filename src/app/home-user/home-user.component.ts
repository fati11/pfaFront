import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  key;
  email ;
  products: Product[] = [];
  // tslint:disable-next-line:variable-name
  private auth_token: string;
  constructor(private api: ApiService , public router: Router ,
              private authenticationService: AuthentificationService ) { }
  getProducts(key , email ) {
    this.api.getProductsContainingMotCle(key, sessionStorage.getItem('email')).subscribe(
        res => {
          this.products = res.oblist;
        }
    );
  }
  ngOnInit() {
    if (this.api.isAuthenticated) {
      this.auth_token = this.api.getToken();
    }
  }


  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
