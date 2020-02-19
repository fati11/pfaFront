import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {NavigationExtras, Router} from '@angular/router';
import {Product} from '../../model/product';
import { Route } from '@angular/compiler/src/core';
import _ from 'underscore';
import {AuthentificationService} from '../../services/authentification.service';
@Component({
  selector: 'app-nouveau-product',
  templateUrl: './nouveau-product.component.html',
  styleUrls: ['./nouveau-product.component.css']
})
export class NouveauProductComponent implements OnInit {
  products: Product[] = [];
  fileToUpload: File = null;
  errMsg;
  showAdd = false;
  auth: string;
  requiredFields: any = {};
  constructor(private api: ProductService, private router: Router , public authenticationService: AuthentificationService) { }
  imageUrl = '/assets/img/noimage.png';
  ngOnInit() {
    this.api.getProducts().subscribe(
        res => {
          this.products = res.oblist;
        }
    );
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  show() {
    this.showAdd = true;
  }
  hide() {
    this.showAdd = false;
  }
  addProd(productid, quan, price, prodname, image) {
    console.log(this.fileToUpload);

    this.errMsg = '';
    this.requiredFields.ref = !productid.value || !productid.value.trim();
    this.requiredFields.desi = !prodname.value || !prodname.value.trim();
    this.requiredFields.price = !price.value || !price.value.trim() || price.value < 0;
    this.requiredFields.quantity = !quan.value || !quan.value.trim() || quan.value < 0;
    this.requiredFields.image = !image.value || !image.value.trim();
    if (_.find(this.requiredFields, function(v) {
      return v;
    })) {
      return;
    }
    this.api.addProduct(productid.value, quan.value, price.value, prodname.value, this.fileToUpload).subscribe(res => {
      this.products = res.oblist;
    }, err => {
      this.errMsg = err.error;
    });
  }
  delProd(prodid) {
    this.api.delProduct(prodid.value).subscribe(res => {
      this.products = res.oblist;
    });
  }
  edit(prodid) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user: prodid.value
      }
    };
    this.router.navigate(['admin/edit'], navigationExtras);
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
  }
}
