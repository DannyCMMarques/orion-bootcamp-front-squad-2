import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { setAuthToken } from 'src/utils/helpers/helpers';
@Injectable({
  providedIn: 'root',
})
export class LoginCadastroService {
  public api_path = '';
  private token = '';

  constructor(private http: HttpClient) {
    this.api_path = environment.urlBase;
  }

  public loginAdministradores(payload: any): Observable<any> {
    //  TODO:Mudar quando tiver a api
    return this.http
      .post(`${this.api_path}auth/login`, payload, {
        observe: 'response',
      })
      .pipe(
        tap((response: any) => {
          this.token = response.body.access_token;
          setAuthToken(this.token);
        })
      );
  }

  public loginPais(payload: string): Observable<any> {
    //  TODO:Mudar quando tiver a api
    return this.http.post(`${this.api_path}auth/parents/login`, payload);
  }

  public loginProfessores(payload: string): Observable<any> {
    //  TODO:Mudar quando tiver a api
    return this.http.post(`${this.api_path}auth/teachers/login`, payload);
  }
}
