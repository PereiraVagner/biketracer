import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';

import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  referenciaTabelaCliente: AngularFireList<Cliente> = null;
  clientes: any;

  constructor(private banco: AngularFireDatabase) {
    this.referenciaTabelaCliente = banco.list('/cliente');
   }

  ngOnInit(): void {
    this.obterClientes();
    this.incluirCliente();

  }

  incluirCliente()
  {
    let c = new Cliente(1, "Teste inserção", 30);
    this.banco.list('cliente').push(c)
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
