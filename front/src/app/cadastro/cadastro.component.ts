import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from '../correntista.service';
import { Correntista } from '../../model/correntista';
import { FormsModule } from '@angular/forms';  
import { Conta } from '../../model/conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public dadosCadastrais = new Correntista();
  public dadosConta = new Conta();    

  constructor(
    private router: Router,
    private service: CorrentistaService,
    private serviceConta: ContaService
  ) {}

  atualizarNomeConta(nome:string){
    this.dadosConta.nome = nome;
  }

  atualizarCpfConta(cpf:string){
    this.dadosConta.cpf = cpf;
  }

  cadastrar() {
    this.service.cadastrar(this.dadosCadastrais).subscribe(resposta => {
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/tela-inicial']);  
    }, erro => {
      console.error("Erro ao cadastrar", erro);
    });
  }

  cadastrarConta(){
    this.serviceConta.cadastrarConta(this.dadosConta).subscribe(resposta => {
      console.log("conta cadastrada");
    }, erro => {
      console.error("Erro ao cadastrar", erro);
    });
  }

  onSubmit(){
    this.cadastrar();
    this.cadastrarConta();
  }
}
