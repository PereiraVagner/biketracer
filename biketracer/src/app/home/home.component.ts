import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ChartOptions } from 'chart.js';
import { map } from 'rxjs/operators';
import { Motorista } from '../model/motorista';
import { Viagem } from '../model/viagem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viagens: any;
  motoristas : any = {};
  status : any = {};
  totalMotoristas: number;
  totalClientes: number;

  public pieChartLabelsMot = [];
  public pieChartDataMot = [];
  public pieChartTypeMot = 'pie';
  public colors = [{
    backgroundColor:[
      'rgba(255, 0, 0, 0.5)',
      'rgba(0, 255, 0, 0.5)',
      'rgba(0, 0, 255, 0.5)',
      'rgba(255, 255, 0, 0.5)',
      'rgba(255, 0, 255, 0.5)',
      'rgba(255, 255, 255, 0.5)'
    ]
  }];
  public options: ChartOptions = {
    scales : {
      yAxes: [{
          ticks: {
            beginAtZero: true
          }
      }]
    }
    // responsive: true,
    // maintainAspectRatio: false,
  }

  public barChartLabelsStatus = [];
  public barChartDataStatus = [];
  public barChartTypeStatus = 'bar';
  public barChartLegend = false;

  constructor(private banco: AngularFireDatabase) {
    this.banco.list<Motorista>('/viagem').snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload, ... c.payload.val()}))))
        .subscribe(data => {

          this.pieChartLabelsMot = [];
          this.pieChartDataMot = [];
          this.barChartLabelsStatus = [];
          this.barChartDataStatus = [];
          this.motoristas = {};
          this.status = {};

          this.viagens = data;
          this.viagens.forEach((vgm: any) => {

            if(this.motoristas[vgm.motorista_id]){
              this.motoristas[vgm.motorista_id] += 1
            } else {
              this.motoristas[vgm.motorista_id] = 1;
            }


            if(this.status[vgm.concluida.toString()]){
              this.status[vgm.concluida.toString()] += 1
            } else {
              this.status[vgm.concluida.toString()] = 1;
            }

          // this.pieChartLabels.push(vgm.descricao);
          // this.pieChartData.push()

          //   this.banco.list('cliente', ref => ref.child(vgm.cliente_id)).valueChanges()
          //   .subscribe((cli_res) => {
          //     vgm.nome_cliente = cli_res[2]
          //   });
          //   this.banco.list('motorista', ref => ref.child(vgm.motorista_id)).valueChanges()
          //   .subscribe((mot_res) => {
          //     vgm.nome_motorista = mot_res[3]
          //   });
          });

          Object.keys(this.motoristas).forEach((key, value)=>{
            this.banco.list('motorista', ref => ref.child(key)).valueChanges()
            .subscribe((mot_res: any) => {
                this.pieChartLabelsMot.push(mot_res[3]);
                this.pieChartDataMot.push(this.motoristas[key]);
            });
          });
          Object.keys(this.status).forEach((key, value)=>{
                this.barChartLabelsStatus.push(key == 'true' ? 'Entregue' : 'Em andamento');
                this.barChartDataStatus.push(this.status[key]);
          });
        });

  }
  ngOnInit() {
      this.banco.list('cliente').valueChanges()
      .subscribe((cli_res) => {
        this.totalClientes = cli_res.length;
      });
      this.banco.list('motorista').valueChanges()
      .subscribe((mot_res) => {
        this.totalMotoristas = mot_res.length;
      });
  }

}
