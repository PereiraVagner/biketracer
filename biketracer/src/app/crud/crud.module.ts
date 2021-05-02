import { ViagemdetalhesComponent } from './viagemdetalhes/viagemdetalhes.component';
import { ViagemcadastroComponent } from './viagemcadastro/viagemcadastro.component';
import { ViagemlistaComponent } from './viagemlista/viagemlista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoristaComponent } from './motorista/motorista.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MotoristalistaComponent } from './motoristalista/motoristalista.component';
import { MotoristacadastroComponent } from './motoristacadastro/motoristacadastro.component';
import { AgmCoreModule } from '@agm/core';
import { NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [MotoristaComponent, ClienteComponent, MotoristalistaComponent, MotoristacadastroComponent, ViagemlistaComponent, ViagemcadastroComponent, ViagemdetalhesComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhoRsktsThcY3vti3xQzs3a5KZT4y8S4w'
    }),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule
  ],
  exports: [MotoristaComponent, ClienteComponent, MotoristacadastroComponent, MotoristalistaComponent, ViagemlistaComponent, ViagemcadastroComponent, ViagemdetalhesComponent]

})
export class CrudModule { }
