import { Motorista } from 'src/app/model/motorista';
import { Cliente } from './../../model/cliente';
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
  v: Viagem;
  viagemExcluir: Viagem;
  modoEdicao:boolean = false;
  viagemEditar: Viagem;
  campoDeBusca: string;
  exibirBarra:boolean = false;
  alerta: Viagem;

  clientes:any;
  motoristas:any;


  constructor(private banco: AngularFireDatabase, private router:Router) {
    this.referenciaTabelaViagem = banco.list('/viagem');// ou ('/motoristacadastro');
   }

  ngOnInit(): void {
    this.v = new Viagem(null, null, null, null, null, null, null, null,null);
    this.carregarDados();

  }

  carregarDados():void
  {
    this.banco.list<Cliente>('cliente').snapshotChanges()
    .pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
        .subscribe(data => {
          this.clientes = [];
          console.log(data);
          data.forEach( (r:any) =>{
            console.log({key: r.key.key, name: r.nome});
            this.clientes.push({key: r.key.key, name: r.nome})
          })
    });
    this.banco.list<Motorista>('motorista').snapshotChanges()
    .pipe(
      map(changes => changes.map(m => ({ key: m.payload, ... m.payload.val()}))))
        .subscribe(data => {
          this.motoristas = [];
          data.forEach( (r:any) =>{
            this.motoristas.push({key: r.key.key, name: r.nome})
          })
    });
  }

  incluirViagem():void
  {
    this.v.data = new Date(this.v.data).getTime();
    this.v.lat = 0;
    this.v.long = 0;
    this.v.alerta = false;
    this.v.concluida = false;
    console.log(this.v.cliente_id)
    this.banco.list('viagem').push(this.v)
      .then((resultado:any) => {
        console.log(resultado.key);
        this.router.navigate(['/viagemlista']);
      })
  }
}
