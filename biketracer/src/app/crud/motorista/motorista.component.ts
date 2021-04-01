import { Component, OnInit } from '@angular/core';
import { Motorista } from '../../model/motorista';

import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.css']
})
export class MotoristaComponent implements OnInit {

  nome = null;

  referenciaTabelaMotorista: AngularFireList<Motorista> = null;
  motoristas: any;
  m: Motorista;
  motoristaexcluir: Motorista;
  modoEdicao:boolean = false;
  motoristaEditar: Motorista;


  constructor(private banco: AngularFireDatabase, private router:Router) {
    this.referenciaTabelaMotorista = banco.list('/motorista');
   }

  ngOnInit(): void {
    this.obterMotoristas();
    this.m = new Motorista(null, null, null);

  }

  incluirMotorista():void
  {
    //let m = new Motorista(1, "Teste inserção", false);
    this.banco.list('motorista').push(this.m)
      .then((resultado:any) => {
        console.log(resultado.key);
      })
  }

  excluirMotorista(motoristaexcluir:Motorista)
  {
    this.banco.list('motorista').remove(motoristaexcluir.key);
  }

  obterMotoristas():void
  {
    this.referenciaTabelaMotorista.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
        .subscribe(data => {
          this.motoristas = data;
        });
  }

  ativarModoEdicao(t1:Motorista)
  {
    this.modoEdicao = !this.modoEdicao;
    this.motoristaEditar = t1;
  }

  alterarAtributoConcluida(checado:boolean)
  {
    this.motoristaEditar.concluida = checado;
  }

  alterarMotorista()
  {
    this.banco.list('motorista').update(
      this.motoristaEditar.key, {nome: this.motoristaEditar.nome, concluida:this.motoristaEditar.concluida
  });
      this.modoEdicao = !this.modoEdicao;
  }
}
