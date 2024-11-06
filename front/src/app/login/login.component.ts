import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';
  

  constructor(
    private router:Router,
    private service: ContaService
  ){}

  logar(){
    this.router.navigate(['/tela-inicial'])
  }

  cadastrar(){
    this.router.navigate(['/cadastro'])
  }
}
