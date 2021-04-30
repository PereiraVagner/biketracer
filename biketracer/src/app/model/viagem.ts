export class Viagem  {

  constructor ( public key: string, public alerta:boolean, public cliente_id:string, public descricao:string,
     public motorista_id:string, public status:boolean, public location:Location){}
}

export class Location  {

    constructor ( public datetime:string, public lat:string, public long:string ){}
  }


