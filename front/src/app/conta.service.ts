import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from '../model/conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(
    private http: HttpClient
  ) { }

  public cadastrarConta(conta: Conta): Observable<any> {
    return this.http.post("http://localhost:3000/contas", conta);
  }
}
