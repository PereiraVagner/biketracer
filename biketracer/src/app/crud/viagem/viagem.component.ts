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

  nome = null;

  referenciaTabelaViagem: AngularFireList<Viagem> = null;
  viagens: any;
  m: Viagem;
  viagemExcluir: Viagem;
  modoEdicao:boolean = false;
  viagemEditar: Viagem;
  campoDeBusca: string;
  exibirBarra:boolean = false;
  alerta: Viagem;


  constructor(private banco: AngularFireDatabase, private router:Router) {
    this.referenciaTabelaViagem = banco.list('/viagem');// ou ('/motoristacadastro');
   }

  ngOnInit(): void {
    this.obterViagem();
    this.m = new Viagem(null, null, null, null, null, null, null);

  }

  incluirViagem():void
  {
    //let m = new Motorista(1, "Teste inserção", false);
    this.banco.list('viagem').push(this.m)
      .then((resultado:any) => {
        console.log(resultado.key);
      })
  }

  excluirViagem(viagemExcluir:Viagem)
  {
    this.banco.list('viagem').remove(viagemExcluir.key);
  }

  obterViagem():void
  {
    this.referenciaTabelaViagem.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
        .subscribe(data => {
          this.viagens = data;
        });
  }

  ativarModoEdicao(t1:Viagem)
  {
    this.modoEdicao = !this.modoEdicao;
    this.viagemEditar = t1;
  }

  alterarAtributoConcluida(checado:boolean)
  {
    this.viagemEditar.status = checado;
  }

  alterarViagem()
  {
    this.banco.list('viagem').update(
      this.viagemEditar.key, {nome: this.viagemEditar.motorista_id, codigo: this.viagemEditar.descricao
       // hbt: this..hbt
    });
      this.modoEdicao = !this.modoEdicao;
  }

  buscarPorNome()
  {
    this.banco.list('viagem', ref => ref.orderByChild('nome').endAt(this.campoDeBusca + '\uf8ff')).valueChanges()
    .subscribe(resultado => {this.viagens = resultado});

  }
  exibirBarraDeBusca()
  {
    this.exibirBarra = !this.exibirBarra;
  }
}
