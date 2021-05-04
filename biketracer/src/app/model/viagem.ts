export class Viagem  {
  constructor ( public key: string, public descricao: string, public motorista_id:string, public cliente_id:string, public lat: number, public long:number, public concluida:boolean, public alerta:boolean, public data: number){}
}
