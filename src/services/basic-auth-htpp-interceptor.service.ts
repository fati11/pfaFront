import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {Router} from '@angular/router';
import {HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService {
  constructor(public auth: AuthentificationService , public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log('interceptt') ;
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }

    return next.handle(req);
  }
}
