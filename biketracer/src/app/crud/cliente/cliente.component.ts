import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';

import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  c: Cliente;

  referenciaTabelaCliente: AngularFireList<Cliente> = null;
  clientes: any;

  constructor(private banco: AngularFireDatabase) {
    this.referenciaTabelaCliente = banco.list('/cliente');
   }

  ngOnInit(): void {
    this.obterClientes();
    this.incluirCliente();

  }

  incluirCliente():void
  {
    //let c = new Cliente(Paulo, "Teste inserção", 30);
    this.banco.list('cliente').push(this.c)
      .then((resultado:any) => {
        console.log(resultado.key);
      })
  }

  obterClientes():void
  {
    this.referenciaTabelaCliente.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
        .subscribe(data => {
          this.clientes = data;
        });
  }

}
