import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Transacao } from '../../model/transacao';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../transacao.service';
import { Router } from '@angular/router';
import { PixComponent } from '../pix/pix.component';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, PixComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent implements OnInit{
  showText = true;
  showTextCartao = true;
  exibir_saldo(){
    const boxContainer = document.querySelector('#exibir_saldo') as HTMLElement;
    boxContainer.classList.toggle("reveal");
    this.showText = !this.showText
  }
  exibir_cartao(){
    const boxContainer = document.querySelector('#exibir_cartao') as HTMLElement;
    boxContainer.classList.toggle("reveal"); 
    this.showTextCartao = !this.showTextCartao
  }

  abrirExtrato(){
    this.router.navigate(['/extrato'])
  }

  fazer_pix(){
    this.router.navigate(['/pix'])
  }


  extrato: Transacao[] = [];
  texto: string = "EXTRATO DO CLIENTE"

  constructor(
    private service: TransacaoService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.service.buscarExtrato()
      .subscribe(itens => {
        this.extrato = itens;
      })
  }
}
