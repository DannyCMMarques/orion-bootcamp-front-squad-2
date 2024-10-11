import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { getAuthToken } from 'src/utils/helpers/helpers';
@Injectable()
export class Interceptor implements HttpInterceptor {
  authToken = getAuthToken();
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authToken;

    if (authToken) {
      req = req.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
    }

    return next.handle(req).pipe(
      tap((response) => {}),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        //TODO: se necessário, alterar quando tiver api
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
