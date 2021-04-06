export class Motorista  {

  constructor ( public key: string, public nome: string, public codigo:string, public concluida: boolean){}
}

export class Localizacao  {

  constructor ( public key: string, public loc_lat:string, public loc_long:string){}
}
