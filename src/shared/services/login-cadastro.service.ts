import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interceptor } from '../interceptor/AuthInterceptor.interceptor';

@Injectable({
  providedIn: 'root',
})
export class LoginCadastroService {
  api = Interceptor;
  constructor(private http: HttpClient) {}

  loginAdministradores(payload: any): Observable<any> { //  TODO:Mudar quando tiver a api
    return this.http.post(
      `auth/login`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',//  TODO:Mudar quando tiver a api
        },
        observe: 'response',
      } //  TODO:Mudar quando tiver a api
    );
  }

  loginPais(matricula: string): Observable<any> { //  TODO:Mudar quando tiver a api
    return this.http.post(`auth/parents/login`, { matricula });
  }

  loginProfessores(matricula: string): Observable<any> { //  TODO:Mudar quando tiver a api
    return this.http.post(`auth/teachers/login`, { matricula });
  }

}
