import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cart} from '../../model/cart';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute , public router: Router ,
              public  authenticationService: AuthentificationService) { }
  product;
  errMsg;
  email;
  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.api.getProductById(paramsId.id, sessionStorage.getItem('email')).subscribe(resp => {
        this.product = resp.prod;
        console.log(this.product);
      });
    });
  }
  addToCart(amount) {
    this.product.quantity = amount.value;
    this.api.addCartItems(this.product, sessionStorage.getItem('email')).subscribe(res => {
      console.log(sessionStorage.getItem('email'));
      console.log(res);
      this.router.navigate(['home/cart']);
    }, err => {
      this.errMsg = err.error.message;
    });
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
  }
}
