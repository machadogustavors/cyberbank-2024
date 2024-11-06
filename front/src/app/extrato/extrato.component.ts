import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { Transacao } from '../../model/transacao';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [TableModule],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  constructor(
    private service: TransacaoService,
    private router:Router
  ){}

  extrato: Transacao[] = [];
  texto: string = "EXTRATO DO CLIENTE"

  ngOnInit(): void {

    this.service.buscarExtrato()
      .subscribe(itens => {
        this.extrato = itens;
      })
  }

  telaInicial(){
    this.router.navigate(['/tela-inicial'])
  }
}
