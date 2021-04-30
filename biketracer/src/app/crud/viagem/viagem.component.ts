import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Motorista } from 'src/app/model/motorista';
import { Router } from "@angular/router";
import { Viagem } from 'src/app/model/viagem';


import { Localizacao } from 'src/app/model/motorista';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  referenciaTabelaViagem: AngularFireList<Viagem> = null;
  motoristas: any;
  m: Location;
  localizacao: Location;

  constructor(private banco: AngularFireDatabase, private router:Router) {
    this.referenciaTabelaViagem = banco.list('/viagem');
   }

  ngOnInit(): void {
    this.obterViagem();
    this.m = new Location(null, null, null, null, null, null, null, null);
  }

  obterViagem():void
  {
    this.referenciaTabelaViagem.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
            .subscribe(data => {
              this.localizacao = data[data.length - 1];
              console.log(this.localizacao);
            })
  }

}
