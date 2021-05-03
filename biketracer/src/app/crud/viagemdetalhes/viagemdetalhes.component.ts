import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { Motorista } from 'src/app/model/viagem';
import { ActivatedRoute, Router } from "@angular/router";


// import { Localizacao } from 'src/app/model/viagem';
import { map } from 'rxjs/operators';
import { google } from '@google/maps';
import { Localizacao, Motorista } from 'src/app/model/motorista';
import { Viagem } from 'src/app/model/viagem';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-viagemdetalhes',
  templateUrl: './viagemdetalhes.component.html',
  styleUrls: ['./viagemdetalhes.component.css']
})
export class ViagemdetalhesComponent implements OnInit {

  referenciaTabelaMotorista: AngularFireList<Motorista> = null;
  referenciaTabelaCliente:AngularFireList<Cliente> = null;
  lng: number = 13;
  lat: number = 80;
  zoom:number = 15;
  viagem: Viagem;
  clienteAtual: String = "";
  motoristaAtual: String = " ";


    constructor(private banco:AngularFireDatabase, private route: ActivatedRoute) {
      this.referenciaTabelaMotorista = banco.list('/motorista');
      this.referenciaTabelaCliente = banco.list('/cliente');
      console.log(this.route.snapshot.paramMap.get('id'));
      this.banco.list('viagem', ref => ref.child(this.route.snapshot.paramMap.get('id'))).valueChanges()
        .subscribe((res: any) => {
          console.log(res)
          this.viagem = new Viagem(
            this.route.snapshot.paramMap.get('id'),
            res[4],
            res[7],
            res[1],
            res[5],
            res[6],
            res[2],
            res[1],
            res[3]
          );
          this.banco.list('cliente', ref => ref.child(this.viagem.cliente_id)).valueChanges()
          .subscribe((cli_res: any) => {
            console.log(cli_res);
            this.clienteAtual = cli_res[2]
          });
          this.banco.list('motorista', ref => ref.child(this.viagem.motorista_id)).valueChanges()
          .subscribe((mot_res: any) => {
            this.motoristaAtual = mot_res[3]
          });
        });
   }

   ngOnInit():void{

   }

 }
