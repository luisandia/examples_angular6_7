import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border:1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {
  usuario: Object = {nombre: null, apellido: null, correo: null, pais:"CRI",sexo:"Hombre",acepta:true};
  paises = [
    {
      codigo: 'CRI',
      pais: 'Costa Rica',
    },
    {
      codigo: 'ESP',
      pais: 'Spain',
    }
  ];
  constructor() {}

  ngOnInit() {}

  guardar(forma: NgForm) {
    console.log('ngForm', forma)
    console.log('Valor forma', forma.value)
    console.log('usuario', this.usuario)
  }
}
