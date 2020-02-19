import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';
import { User } from '../Model/user';
import { Address } from '../Model/address';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REG_API = 'http://localhost:8489/user/signup';
  private LOGU_API = 'http://localhost:8489/user/verify';
  private LOGA_API = 'http://localhost:8489/admin/verify';
  private PRDLST_API = 'http://localhost:8489/user/getProducts';
  private ADD_CART_API = 'http://localhost:8489/user/addToCart?productId=';
  private VW_CART_API = 'http://localhost:8489/user/viewCart';
  private UP_CART_API = 'http://localhost:8489/user/updateCart';
  private DEL_CART_API = 'http://localhost:8489/user/delCart';
  private PLC_ORD_API = 'http://localhost:8489/user/placeOrder';
  private ADR_API = 'http://localhost:8489/user/addAddress';
  private GT_ADR_API = 'http://localhost:8489/user/getAddress';
  private ADD_PRD_API = 'http://localhost:8489/admin/addProduct';
  private DEL_PRD_API = 'http://localhost:8489/admin/delProduct';
  private UPD_PRD_API = 'http://localhost:8489/admin/updateProducts';
  private ORD_API = 'http://localhost:8489/admin/viewOrders';
  private UPD_ORD_API = 'http://localhost:8489/admin/updateOrder';
  private PRODUCT_BY_ID = 'http://localhost:8489/user/getProduct?productId=';
  private RESET_PASSWORD_URL = 'http://localhost:8489/user/password';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private http: HttpClient) {

  }
  // Registering the users to the database
  register(user: User): Observable<any> {
    return this.http.post(this.REG_API,
        user);
  }
  resetPassword(form): Observable<any> {
    return this.http.post(this.RESET_PASSWORD_URL, form , {
      headers:
          { 'Content-Type': 'application/json' }
    });
  }
  // validating user credentials
  userLogin(user: User): Observable<any> {
    return this.http.post(this.LOGU_API,
        JSON.stringify(user),
        {
          headers:
              { 'Content-Type': 'application/json' }
        });
  }

  // validating admin credentials
  adminLogin(user: User): Observable<any> {
    return this.http.post(this.LOGA_API,
        JSON.stringify(user),
        {
          headers:
              { 'Content-Type': 'application/json' }
        });
  }
  // Fetching all the products from the database
  getProductsContainingMotCle(key, email: string): Observable<any> {
    return this.http.get<any>(this.PRDLST_API + '/' + key);

  }
  // Fetching all the products from the database
  getProducts(email: string): Observable<any> {

    return this.http.get<any>(this.PRDLST_API);

  }
  // Add Products to the user Cart
  addCartItems(product: Product, email: string): Observable<any> {
    return this.http.get<any>(this.ADD_CART_API + product.productid + '&&quantity=' + product.quantity + '&&email=' + email);
  }
  getProductById(id, email: string): Observable<any> {
    return this.http.get<any>(this.PRODUCT_BY_ID + id);
  }
  // View Cart Items for the logged User
  getCartItems(email: string): Observable<any> {
    return this.http.get<any>(this.VW_CART_API + '?email=' + email );
  }

  // add items to cart for the logged User
  updateCart(email: string, prodid: number, quant: number): Observable<any> {
    return this.http.get<any>(this.UP_CART_API + '?bufcartid=' + prodid + '&quantity=' + quant + '&email=' + email );
  }

  // delete cart Item from logged User's Cart item
  delCart(email: string, bufdid: number): Observable<any> {
    return this.http.get<any>(this.DEL_CART_API + '?bufcartid=' + bufdid + '&&email=' + email );
  }

  // place the order of logged User
  place(email: string): Observable<any> {
    return this.http.get<any>(this.PLC_ORD_API + '&email=' + email );
  }
  // Add product for Logged AdminUser
  addProduct(auth: string, productid: string, quan: string, price: string, prodname: string, image: File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('productId', productid);
    formData.append('price', price);
    formData.append('designation', prodname);
    formData.append('quantity', quan);
    formData.append('file', image);

    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    return this.http.post<any>(this.ADD_PRD_API, formData, { headers: myheader });

  }

  // delete Product for Logged Admin User
  delProduct(auth: string, prodid: number) {
    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    return this.http.get<any>(this.DEL_PRD_API + '?productId=' + prodid, { headers: myheader });
  }

  // delete Product for Logged Admin User
  getOrders(email: string) {
    return this.http.get<any>(this.ORD_API);
  }

  update(auth: string, order: any) {
    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    const formData: FormData = new FormData();
    formData.append('orderId', order.orderId);
    formData.append('orderStatus', order.orderStatus);
    return this.http.post<any>(this.UPD_ORD_API, formData, { headers: myheader });
  }

  // delete Product for Logged Admin User
  upOrders(auth: string, prodid: number) {
    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    return this.http.get<any>(this.DEL_PRD_API + '?productid=' + prodid, { headers: myheader });
  }

  // update Product for Logged Admin User
  updateProduct(auth: string, desi: string,
                quan: string, price: string, image: File, productid: any): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('designation', desi);
    formData.append('price', price);
    formData.append('quantity', quan);
    formData.append('file', image);
    formData.append('productId', productid);

    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    return this.http.post<any>(this.UPD_PRD_API, formData, { headers: myheader });

  }

  // Authentication Methods

  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // tslint:disable-next-line:variable-name
  storeToken(token: string, auth_type: string) {
    this.storage.set('auth_token', token);
    this.storage.set('auth_type', auth_type);
  }

  getAuthType(): string {
    if (this.storage.get('auth_type') !== null) {
      return this.storage.get('auth_type');
    }
    return null;
  }


  getToken() {
    return this.storage.get('auth_token');
  }

  removeToken() {
    this.storage.remove('auth_type');
    return this.storage.remove('auth_token');
  }

}
