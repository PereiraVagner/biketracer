import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
  import { Motorista } from 'src/app/model/motorista';
  import { Router } from "@angular/router";

@Component({
  selector: 'app-motoristacadastro',
  templateUrl: './motoristacadastro.component.html',
  styleUrls: ['./motoristacadastro.component.scss']
})
export class MotoristacadastroComponent implements OnInit {

    nomemotorista: Motorista;
    referenciaTabelaMotorista: AngularFireList<Motorista> = null;

    constructor(private banco:AngularFireDatabase, private router: Router) {
      this.nomemotorista= new Motorista(null, null, null, null, null);
      this.referenciaTabelaMotorista = banco.list('/motorista');
     }

    ngOnInit(): void {

    }

    incluirMotorista(){
      this.referenciaTabelaMotorista.push(this.nomemotorista);
      this.router.navigate(['/motoristalista']);
    }

    alterarAtributoConcluida(checked:boolean)
    {
      this.nomemotorista.concluida = checked;
    }

  }

