import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoristaComponent } from './motorista/motorista.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MotoristalocalizacaoComponent } from './motoristalocalizacao/motoristalocalizacao.component';
import { MotoristalistaComponent } from './motoristalista/motoristalista.component';
import { MotoristacadastroComponent } from './motoristacadastro/motoristacadastro.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [MotoristaComponent, ClienteComponent, MotoristalocalizacaoComponent, MotoristalistaComponent, MotoristacadastroComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhoRsktsThcY3vti3xQzs3a5KZT4y8S4w'
    })
  ],
  exports: [MotoristaComponent, ClienteComponent, MotoristalocalizacaoComponent, MotoristacadastroComponent, MotoristalistaComponent]

})
export class CrudModule { }
