import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
title= "biketracer"
itemsProfile = [
  {
    title: 'Logout',
  },
];
itemsMotorista = [
  {
    title: 'Novo',
    link: '/motoristacadastro'
  },
  {
    title: 'Ver motoristas',
    link: '/motoristalista'
  },
];
itemsClientes = [
  {
    title: 'Novo',
    link: '/clientecadastro'
  },
  {
    title: 'Ver Clintes',
    link: '/clientelista'
  },
];
itemsViagens = [
  {
    title: 'Nova',
    link: '/viagem'
  },
  {
    title: 'Ver Viagens',
    link: '/viagemlista'
  },
];

toggleSidebar(){

}

navigateHome(){

}

}



