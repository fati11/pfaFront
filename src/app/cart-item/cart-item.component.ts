import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {Cart} from '../../model/cart';
import {HttpClient} from '@angular/common/http';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  private auth: string;
  errMsg;
  cartlist: Cart[];
  totalSum = 0;
  totalSum1 = 0;
  excel = [];
  constructor(private api: ApiService, private route: Router  , private http: HttpClient ,
              private authenticationService: AuthentificationService , public router: Router) {

  }

  ngOnInit() {
    this.api.getCartItems(sessionStorage.getItem('email')).subscribe(res => {
      this.cartlist = res.oblist;
      this.cartlist.forEach(value => {
        this.excel.push(value);
        this.totalSum = this.totalSum + (value.quantity * value.price);
        this.excel.push(this.totalSum);
        console.log(this.totalSum);
      });
    });

  }
  update(id, quantity) {
    this.totalSum = 0;
    this.api.updateCart(sessionStorage.getItem('email'), id.value, quantity.value).subscribe(res => {
      this.cartlist = res.oblist;
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price);
      });
    }, error  => {
      alert(error.error.message);
    });
  }
  delete(id) {
    this.totalSum = 0;
    this.api.delCart(sessionStorage.getItem('email'), id.value).subscribe(res => {
      this.cartlist = res.oblist;
      console.log(res);
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price);
      });
    });
  }

  place() {
    this.api.place(this.auth).subscribe(res => {
      console.log(res);
    });
    this.route.navigate(['/home']);
  }
  download() {

  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
