import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  frase: any ={
    mensaje:'Quiero salir',
    author:'Luis'
  };
  mostrar:boolean=true;

  personajes : string[] = ['B2','A2','Pascal']
}
