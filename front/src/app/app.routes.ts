import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { PixComponent } from './pix/pix.component';
import { ProvaPooComponent } from './prova-poo/prova-poo.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'tela-inicial', component: TelaInicialComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'extrato', component: ExtratoComponent},
    {path: 'pix', component: PixComponent},
    {path: 'prova-poo', component: ProvaPooComponent}
];
