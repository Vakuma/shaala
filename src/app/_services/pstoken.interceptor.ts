import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector,
    public _authServ: AuthenticationService,
    public _router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('/auth/') === -1) {
          request = request.clone({
          setHeaders: {
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        });
        if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }
        }
      return next.handle(request).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          if (event.body.error && event.body.error.code === 401) {
            this._router.navigate(['/login']);
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect to the login route
            // or show a modal
            this._router.navigate(['/login']);
          }
        }
      });
    }
  }

  export class BaseUrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let url = window.location.origin;
      if (url === 'http://localhost:4200') {
        url = 'http://13.232.68.176:8080';
      } else {
        url = url;
      }

      // const url = 'http://13.232.68.176:8080';
      // const url = 'https://ps-staging.merchantpayments.site';
      // const url = 'https://ps-staging.merchantpayments.site';
      // const url = 'http://localhost:8080';
      const tempUrl = 'http://www.json-generator.com/';
      if (req.url.indexOf('/auth/') !== -1 || req.url.indexOf('/gateway/') !== -1 ) {
        req = req.clone({
          url: url + req.url
        });
      } else if (req.url.indexOf('indent') !== -1) {
        req = req.clone({
          url: tempUrl + req.url
        });
      } else {
        req = req.clone({
          url: req.url
        });
      }
      return next.handle(req);
    }
  }
