import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicAuthHtppInterceptorService} from './basic-auth-htpp-interceptor.service';
import {Contact} from '../model/Contact';
import {Client} from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http: HttpClient , public basicAuthHtppInterceptorService: BasicAuthHtppInterceptorService  ) { }
  saveClient(client: Client) {
    return this.http.post('http://localhost:8489/saveRoleClient', client );
  }
}
