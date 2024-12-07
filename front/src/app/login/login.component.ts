import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { Usuario } from '../../model/usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {

  }

  usuario = new Usuario();

  public fazerLogin() {
    this.httpClient.post("http://localhost:8081/usuario/login", this.usuario)
    .subscribe(retorno => {
       if(retorno == true) {
         this.router.navigate(['/tela-inicial']);
       } else {
        alert("Usuario ou senha incorretos");
       }
    });
  }
}