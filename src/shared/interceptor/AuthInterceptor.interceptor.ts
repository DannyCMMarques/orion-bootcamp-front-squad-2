import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { getAuthToken } from 'src/utils/helpers/helpers';
import { environment } from './../../environments/environment.development';

@Injectable()
export class Interceptor implements HttpInterceptor {
   authToken = getAuthToken()
  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authToken;

    let modifiedReq = req.clone({
      url: `${environment.urlBase}${req.url}`
    });

    if (authToken) {
      modifiedReq = modifiedReq.clone({
        headers: modifiedReq.headers.set('Authorization', `Bearer ${authToken}`)

      });
    }

    return next.handle(modifiedReq).pipe(
      tap(response => {
        console.log('Response:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        //TODO: se necessário, alterar quando tiver api
        if (error.status === 403) {
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
