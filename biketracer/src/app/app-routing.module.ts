import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotoristaComponent } from './crud/motorista/motorista.component';
import { ClienteComponent } from './crud/cliente/cliente.component';
import { MotoristalocalizacaoComponent } from './crud/motoristalocalizacao/motoristalocalizacao.component';

const routes: Routes = [
  {path: 'listamotorista', component:MotoristaComponent },
  {path: 'cadastrarcliente', component:ClienteComponent},
  {path: 'cadastrarlocalizacao', component:MotoristalocalizacaoComponent},

  {path: '', redirectTo: '/home', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
