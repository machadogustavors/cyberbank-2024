import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correntista } from '../model/correntista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  private nome:string = ''
  constructor(
    private http: HttpClient
  ) { }

  public cadastrar(correntista: Correntista): Observable<any> {
    return this.http.post("http://localhost:8081/usuario", correntista);
  }

  public getNome(): string {
    return this.nome;
  }

}