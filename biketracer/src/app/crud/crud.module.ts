import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoristaComponent } from './motorista/motorista.component';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [MotoristaComponent, ClienteComponent],
  imports: [
    CommonModule
  ],
  exports: [MotoristaComponent, ClienteComponent]

})
export class CrudModule { }
