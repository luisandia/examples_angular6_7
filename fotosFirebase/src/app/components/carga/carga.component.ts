import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-items';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estasSobreElemento:boolean=false;
  archivos:FileItem[]=[];
  constructor(public _cargaImagenes:CargaImagenesService) {

  }

  ngOnInit() {
  }

  cargarImagenes(){
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
  }
  pruebaSobreElemento(event){
    console.log(event)
  }

  limpiarArchivos(){
    this.archivos=[];
  }
}
