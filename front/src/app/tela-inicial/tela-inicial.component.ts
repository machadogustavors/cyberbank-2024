import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {
  exibir_saldo(){
    const boxContainer = document.querySelector('#exibir_saldo') as HTMLElement;
    boxContainer.classList.toggle("reveal");
  }
  exibir_cartao(){
    const boxContainer = document.querySelector('#exibir_cartao') as HTMLElement;
    boxContainer.classList.toggle("reveal");
  }
}
