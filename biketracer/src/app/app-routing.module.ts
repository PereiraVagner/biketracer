import { ClientecadastroComponent } from './crud/clientecadastro/clientecadastro.component';
import { HomeComponent } from './home/home.component';
import { ViagemlistaComponent } from './crud/viagemlista/viagemlista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ClienteComponent } from './crud/cliente/cliente.component';
import { MotoristacadastroComponent } from './crud/motoristacadastro/motoristacadastro.component';
import { MotoristalistaComponent } from './crud/motoristalista/motoristalista.component';

import { ViagemcadastroComponent } from './crud/viagemcadastro/viagemcadastro.component';
import { ViagemdetalhesComponent } from './crud/viagemdetalhes/viagemdetalhes.component';


const routes: Routes = [
  {path: 'motoristalista', component:MotoristalistaComponent },
  {path: 'motoristacadastro', component:MotoristacadastroComponent},
  {path: 'clientelista', component:ClienteComponent},
  {path: 'clientecadastro', component:ClientecadastroComponent},
  {path: 'viagemlista', component:ViagemlistaComponent },
  {path: 'viagemcadastro', component:ViagemcadastroComponent},
  {path: 'viagemdetalhes/:id', component:ViagemdetalhesComponent},
  {path: 'home',component:HomeComponent},

  {path: '', redirectTo: 'home', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
