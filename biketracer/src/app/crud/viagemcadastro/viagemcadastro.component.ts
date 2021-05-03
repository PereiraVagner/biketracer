import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Viagem } from 'src/app/model/viagem';

@Component({
  selector: 'app-viagemcadastro',
  templateUrl: './viagemcadastro.component.html',
  styleUrls: ['./viagemcadastro.component.css']
})
export class ViagemcadastroComponent implements OnInit {

  nome = null;

  referenciaTabelaViagem: AngularFireList<Viagem> = null;
  viagens: any;
  v: Viagem;
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
    this.v = new Viagem(null, null, null, null, null, null, null, null, null);

  }

  incluirViagem():void
  {
    //let m = new Motorista(1, "Teste inserção", false);
    this.banco.list('cliente').valueChanges()
      .subscribe((cli_res:any) => {
        cli_res.forEach( r =>{
          console.log(r)
        })
      });
        this.banco.list('motorista').valueChanges()
          .subscribe((mot_res:any) => {
            mot_res.forEach( m => {

            })
          });
          this.banco.list('viagem').push(this.v)
            .then((resultado:any) => {
              console.log(resultado.key);
            })
            this.router.navigate(['/viagemlista']);
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


  alterarAtributoConcluida(checked:boolean)
  {
    this.viagemEditar.concluida = checked;
    this.viagemEditar.alerta = checked;
  }


  alterarViagem()
  {
    this.banco.list('viagem').update(
      this.viagemEditar.key, {nome: this.viagemEditar.motorista_id, codigo: this.viagemEditar.descricao,
        clientID: this.viagemEditar.cliente_id, concluida: this.viagemEditar.concluida
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
