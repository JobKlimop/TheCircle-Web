import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if(token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: token
        }
      });

      console.log(cloned);
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
