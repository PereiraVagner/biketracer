import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Motorista } from 'src/app/model/motorista';
import { Router } from "@angular/router";


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
  referenciaTabelaCadastrarMotorista:AngularFireList<Localizacao> = null;
  lng: number = 13;
  lat: number = 80;
  zoom:number = 15;
  localizacoes: any;


    constructor(private banco:AngularFireDatabase, private router: Router) {
    this.referenciaTabelaMotorista = banco.list('/motorista');
    this.referenciaTabelaCadastrarMotorista = banco.list('/localizacao');
   }

   ngOnInit():void{
    this.obterLocalizacao();
   }

   obterLocalizacao():void
   {
      this.referenciaTabelaCadastrarMotorista.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
            .subscribe(data => {
              this.localizacoes = data;
              console.log(this.localizacoes);
            })


    }

 }
