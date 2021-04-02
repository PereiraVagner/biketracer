import { Component, OnInit } from '@angular/core';
import { Motorista } from '../../model/motorista';

import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { Router } from "@angular/router";

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.css']
})
export class MotoristaComponent implements OnInit {


  constructor() {
 }

  ngOnInit(): void {


  }


}

