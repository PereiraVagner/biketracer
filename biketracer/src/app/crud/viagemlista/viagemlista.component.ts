import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Viagem } from 'src/app/model/viagem';

@Component({
  selector: 'app-viagemlista',
  templateUrl: './viagemlista.component.html',
  styleUrls: ['./viagemlista.component.css']
})
export class ViagemlistaComponent implements OnInit {

  nome = null;

  referenciaTabelaViagem: AngularFireList<Viagem> = null;
  viagens: any;
  viagensData: any;
  v: Viagem;
  viagemexcluir: Viagem;
  modoEdicao:boolean = false;
  viagemeditar: Viagem;
  campoDeBusca: string;
  exibirBarra:boolean = false;
  clienteAtual: any;
  motoristaAtual: any;



  constructor(private banco: AngularFireDatabase, private router:Router) {
    this.referenciaTabelaViagem = banco.list('/viagem');// ou ('/motoristacadastro');
   }

  ngOnInit(): void {
    this.obterViagens();
    this.v = new Viagem(null, null, null, null, null,null,null,null, null);

  }

  incluirMotorista():void
  {
    //let m = new Motorista(1, "Teste inserção", false);
    this.banco.list('viagem').push(this.v)
      .then((resultado:any) => {
        console.log(resultado.key);
      })
  }

  excluirMotorista(viagemexcluir:Viagem)
  {
    this.banco.list('viagem').remove(viagemexcluir.key);
  }

  obterViagens():void
  {
    this.referenciaTabelaViagem.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
        .subscribe(data => {
          this.viagensData = data;
          this.viagens = data;
          this.viagens.forEach((vgm: any) => {
            this.banco.list('cliente', ref => ref.child(vgm.cliente_id)).valueChanges()
            .subscribe((cli_res) => {
              vgm.nome_cliente = cli_res[2]
            });
            this.banco.list('motorista', ref => ref.child(vgm.motorista_id)).valueChanges()
            .subscribe((mot_res) => {
              vgm.nome_motorista = mot_res[3]
            });
          });
        });
  }

  ativarModoEdicao(t1:Viagem)
  {
    this.modoEdicao = !this.modoEdicao;
    this.viagemeditar = t1;
  }

  alterarAtributoConcluida(checado:boolean)
  {
    this.viagemeditar.concluida = checado;
  }

  alterarMotorista()
  {
    this.banco.list('viagem').update(

      this.viagemeditar.key, {descricao: this.viagemeditar.descricao, motorista_id:this.viagemeditar.motorista_id, cliente_id:this.viagemeditar.cliente_id, lat: this.viagemeditar.lat, long:this.viagemeditar.long, concluida:this.viagemeditar.concluida, alerta:this.viagemeditar.alerta});
      this.modoEdicao = !this.modoEdicao;
  }

  buscarPorDescricao()
  {
    this.banco.list('viagem', ref => ref.orderByChild('descricao').endAt(this.campoDeBusca + '\uf8ff')).valueChanges()
    .subscribe(resultado => {this.viagens = resultado});

  }
  exibirBarraDeBusca()
  {
    this.exibirBarra = !this.exibirBarra;
  }

  VerDetalhes(viagemSelecionada: any){
    console.log(viagemSelecionada.key.key);
    this.router.navigate([`/viagemdetalhes/${viagemSelecionada.key.key}`])
  }

}
