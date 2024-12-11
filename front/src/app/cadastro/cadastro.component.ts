import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CorrentistaService } from '../correntista.service';
import { Correntista } from '../../model/correntista';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  public usuario = new Usuario();
  public titulo: string = 'Cadastro de Clientes';
  public nome = '';
  public login = '';
  public senha = '';

  constructor(
    private router: Router,
    private service: CorrentistaService
  ) {}

  clickSalvar(): void {
    this.service.cadastrar(this.usuario).subscribe ( resposta => {
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/']); 
    })
  }

  public voltar() {
    this.router.navigate(['/']); 
  }

}