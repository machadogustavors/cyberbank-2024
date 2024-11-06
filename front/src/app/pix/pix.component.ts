import { Component } from '@angular/core';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix',
  standalone: true,
  imports: [TelaInicialComponent],
  templateUrl: './pix.component.html',
  styleUrl: './pix.component.css'
})
export class PixComponent {
  constructor(
    private router:Router
  ){}

  telaInicial(){
    this.router.navigate(['/tela-inicial'])
  }
}
