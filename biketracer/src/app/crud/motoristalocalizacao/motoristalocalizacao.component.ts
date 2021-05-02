import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Motorista } from 'src/app/model/motorista';
import { ActivatedRoute, Router } from "@angular/router";
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
  referenciaTabelaViagemMotorista:AngularFireList<Viagem> = null;
  zoom:number = 15;
  viagem: any;
  localizacao: any;
  id : String;
  viagens:any;


    constructor(private banco:AngularFireDatabase, private router: ActivatedRoute) {
    this.id = router.params["id"];
    this.referenciaTabelaMotorista = banco.list('/motorista');
    this.referenciaTabelaViagemMotorista = banco.list('/viagem/${this.id}');
   }

   ngOnInit():void{
    this.obterLocalizacao();
    this.enviarAlerta();
   }

   obterLocalizacao():void
   {
      this.referenciaTabelaViagemMotorista.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
            .subscribe(data => {
             this.viagem = data;
             this.banco.list<Location>('/viagem/${this.id}/location').snapshotChanges()
             .pipe(
              map(chagain => chagain.map(d => ({ key: d.payload, ... d.payload.val()}))))
                    .subscribe(lock => {
                      this.localizacao = lock[lock.length - 1];
                    })

             //this.localizacao = data.[data.length - 1];
              //console.log(this.localizacao.location.);
            })
  }
      enviarAlerta():void
      {
        this.referenciaTabelaViagemMotorista.snapshotChanges().pipe(
          map(changes => changes.map(a => ({ key: a.payload, ... a.payload.val()}))))
            .subscribe(data => {
              this.viagens = data ;
              });
      }


 }
