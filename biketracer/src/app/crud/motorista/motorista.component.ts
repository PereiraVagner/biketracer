import { Component, OnInit } from '@angular/core';
import { Motorista } from '../../model/motorista';

import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.css']
})
export class MotoristaComponent implements OnInit {

  listagemDeMotoristas: Motorista[];

  constructor() { }

  ngOnInit(): void {
    this.inicializarArrayDeMotoristas();
  }

  inicializarArrayDeMotoristas():void{
    this.listagemDeMotoristas = [
      new Motorista(1, "Cadastro Motorista" , false),
    ]
  }

}
