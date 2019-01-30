import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Luis';
  nombre2 ="luiS AndIa MamanI"
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  PI = Math.PI;
  a = 0.23456;
  salario = 1234.5;

  heroe = {nombre: 'Logan', clave: 'wolverine', edad: 500};
  video= 'G8ey_RBdxYM';
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la promesa '), 3500);
  });
  activar:boolean=true;
  fecha = new Date();

  toggleValue(){
    this.activar=!this.activar;
  }
}
