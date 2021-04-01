import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoristaComponent } from './motorista/motorista.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MotoristalocalizacaoComponent } from './motoristalocalizacao/motoristalocalizacao.component';



@NgModule({
  declarations: [MotoristaComponent, ClienteComponent, MotoristalocalizacaoComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [MotoristaComponent, ClienteComponent, MotoristalocalizacaoComponent]

})
export class CrudModule { }
