import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ChartsModule,
    NbLayoutModule,
    NbCardModule,
  ]
})
export class HomeModule { }
