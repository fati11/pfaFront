import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private PRDLST_API = 'http://localhost:8489/admin/getProducts';
  private ADR_API = 'http://localhost:8489/user/addAddress';
  private GT_ADR_API = 'http://localhost:8489/user/getAddress';
  private ADD_PRD_API = 'http://localhost:8489/admin/addProduct';
  private DEL_PRD_API = 'http://localhost:8489/admin/delProduct';
  private UPD_PRD_API = 'http://localhost:8489/admin/updateProducts';
  private PRODUCT_BY_ID = 'http://localhost:8489/user/getProduct?productId=';
  private ORD_API = 'http://localhost:8084/admin/viewOrders';
  constructor(private http: HttpClient) {
  }
  // Fetching all the products from the database
  getProductsContainingMotCle(key): Observable<any> {

    return this.http.get<any>(this.PRDLST_API + '/' + key);

  }
  // Fetching all the products from the database
  getProducts(): Observable<any> {

    return this.http.get<any>(this.PRDLST_API);
  }
  getProductById(id, auth: string): Observable<any> {
    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    return this.http.get<any>(this.PRODUCT_BY_ID + id, { headers: myheader });
  }
  addProduct(productid: string, quan: string, price: string, prodname: string, image: File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('productId', productid);
    formData.append('price', price);
    formData.append('designation', prodname);
    formData.append('quantity', quan);
    formData.append('file', image);


    return this.http.post<any>(this.ADD_PRD_API, formData);

  }

  // delete Product for Logged Admin User
  delProduct(prodid: number) {
    return this.http.get<any>(this.DEL_PRD_API + '?productId=' + prodid);
  }
// update Product for Logged Admin User
  updateProduct(desi: string,
                quan: string, price: string, image: File, productid: any): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('designation', desi);
    formData.append('price', price);
    formData.append('quantity', quan);
    formData.append('file', image);
    formData.append('productId', productid);

    return this.http.post<any>(this.UPD_PRD_API, formData);

  }
  // delete Product for Logged Admin User
  getOrders(auth: string) {
    const myheader = new HttpHeaders().set('AUTH_TOKEN', auth);
    return this.http.get<any>(this.ORD_API, { headers: myheader });
  }
}
