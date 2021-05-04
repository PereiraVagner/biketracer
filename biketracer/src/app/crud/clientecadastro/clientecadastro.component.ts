import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
  import { Motorista } from 'src/app/model/motorista';
  import { Router } from "@angular/router";
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-clientecadastro',
  templateUrl: './clientecadastro.component.html',
  styleUrls: ['./clientecadastro.component.scss']
})
export class ClientecadastroComponent implements OnInit {

    cliente: Cliente;
    referenciaTabelaMotorista: AngularFireList<Cliente> = null;

    constructor(private banco:AngularFireDatabase, private router: Router) {
      this.cliente= new Cliente(null, null, null);
      this.referenciaTabelaMotorista = banco.list('/cliente');
     }

    ngOnInit(): void {

    }

    incluirMotorista(){
      this.referenciaTabelaMotorista.push(this.cliente);
      this.router.navigate(['/clientelista']);
    }

  }

