export class Motorista  {

  constructor ( public key: string, public nome: string, public codigo:string, public hbt:string, public concluida: boolean){}
}

export class Localizacao  {

  constructor ( public key: string, public lat:string, public long:string){}
}
