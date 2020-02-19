import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import _ from 'underscore';
import {AuthentificationService} from '../../services/authentification.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  requiredFields: any = {};
  errMsg;
  product: Product = {
    productid: '',
    designation: '',
    price: 0,
    quantity: 0,
    productimage: null
  };
  products: Product[] = [];
  fileToUpload: File = null;
  auth: string;
  prodid: string;
  imageUrl = '/assets/img/noimage.png';

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private api: ProductService , public authenticationService: AuthentificationService , public router: Router) {
      this.api.getProducts().subscribe(
          res => {
            res.oblist.forEach(pro => {
              if (pro.productid === this.prodid) {
                this.product = pro;
                this.fileToUpload = pro.productimage;
              }
            });
          }
      );
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.prodid = params.user;
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  updateProd(desi, quan, price, prodid, image) {
    this.errMsg = '';
    this.requiredFields.price = !price.value || !price.value.trim() || price.value < 0;
    this.requiredFields.quantity = !quan.value || !quan.value.trim() || quan.value < 0;
    this.requiredFields.desi = !desi.value || !desi.value.trim();
    this.requiredFields.image = (!image.value || !image.value.trim()) && !this.product.productimage;
    if ( _.find(this.requiredFields,  function(v) {
      return v;
    })) {
      return;
    }
    this.api.updateProduct( desi.value, quan.value, price.value, this.fileToUpload, prodid.value).subscribe(res => {
      console.log(res);
    }, err => {
      this.errMsg = err.error.message;
    });
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
  }
}
