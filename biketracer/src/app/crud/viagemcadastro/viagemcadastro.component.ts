import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Viagem } from 'src/app/model/viagem';

@Component({
  selector: 'app-viagemcadastro',
  templateUrl: './viagemcadastro.component.html',
  styleUrls: ['./viagemcadastro.component.scss']
})
export class ViagemcadastroComponent implements OnInit {

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
    this.m = new Viagem(null, null, null, null, null, null, null, null, null);

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
    this.viagemEditar.concluida = checado;
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
