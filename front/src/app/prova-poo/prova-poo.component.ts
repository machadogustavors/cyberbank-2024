import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prova-poo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prova-poo.component.html',
  styleUrls: ['./prova-poo.component.css']
})
export class ProvaPooComponent {
  resultado: number | null = null; 

  constructor() {}

  calcular(event: Event) {
    event.preventDefault();

    const valorMensal = parseFloat((document.querySelector('.aporte-mensal') as HTMLInputElement)?.value);
    const dataResgate = (document.querySelector('input[type="date"]') as HTMLInputElement)?.value;

    if (isNaN(valorMensal) || !dataResgate) {
      console.log('Valores inválidos!');
      return;
    }

    const dataAtual = new Date();
    const dataResgateDate = new Date(dataResgate);

    const meses = this.diferencaEmMeses(dataAtual, dataResgateDate);

    const taxaMensal = 0.009;

    this.resultado = this.calcularRendimentoCDB(valorMensal, meses, taxaMensal);
  }

  diferencaEmMeses(dataInicio: Date, dataFim: Date): number {
    const anoInicio = dataInicio.getFullYear();
    const mesInicio = dataInicio.getMonth();
    const anoFim = dataFim.getFullYear();
    const mesFim = dataFim.getMonth();
    
    return (anoFim - anoInicio) * 12 + (mesFim - mesInicio);
  }

  calcularRendimentoCDB(aporteMensal: number, meses: number, taxa: number): number {
    let montante = 0;
    
    for (let i = 0; i < meses; i++) {
      montante = (montante + aporteMensal) * (1 + taxa);
    }

    return montante;
  }
}
