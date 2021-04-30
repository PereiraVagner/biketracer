import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Motorista } from 'src/app/model/motorista';
import { Router } from "@angular/router";
import { Viagem } from 'src/app/model/viagem';


import { Localizacao } from 'src/app/model/motorista';
import { map } from 'rxjs/operators';
import { google } from '@google/maps';



@Component({
  selector: 'app-motoristalocalizacao',
  templateUrl: './motoristalocalizacao.component.html',
  styleUrls: ['./motoristalocalizacao.component.css']
})
export class MotoristalocalizacaoComponent implements OnInit {

  referenciaTabelaMotorista: AngularFireList<Motorista> = null;
  referenciaTabelaCadastrarMotorista:AngularFireList<Viagem> = null;
  zoom:number = 15;
  localizacao: Viagem;


    constructor(private banco:AngularFireDatabase, private router: Router) {
    this.referenciaTabelaMotorista = banco.list('/motorista');
    this.referenciaTabelaCadastrarMotorista = banco.list('/viagem');
   }

   ngOnInit():void{
    this.obterLocalizacao();
   }

   obterLocalizacao():void
   {
      this.referenciaTabelaCadastrarMotorista.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
            .subscribe(data => {
              this.localizacao = data[data.length - 1];
              console.log(this.localizacao.location);
            })


    }

 }
