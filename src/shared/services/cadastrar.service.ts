import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  public api_path = '';

  constructor(private http: HttpClient) {
    this.api_path = environment.urlBase;
  }

  public cadastroEstudante(payload: any): Observable<any> {
    //  TODO:Mudar quando tiver o endPoint
    return this.http
      .post(`${this.api_path}cadastrar/Estudante`, payload);
  }

}
