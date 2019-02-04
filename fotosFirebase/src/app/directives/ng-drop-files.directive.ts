import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {FileItem} from '../models/file-items';

@Directive({selector: '[appNgDropFiles]'})
export class NgDropFilesDirective {
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  @Input() archivos: FileItem[];
  constructor() {}


  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }
  @HostListener('dragleave', ['$event'])
  public onDragLEave(event: any) {
    this.mouseSobre.emit(false);
  }
  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    //obtengo archivo
    const transferencia = this._getTransferencia(event);

    if(!transferencia){
      return;
    }
    this._prevenirDetener(event);
    this._extraerArchivos(transferencia.files);
    // this._prevenirDetener(event);
    this.mouseSobre.emit(false);
  }
  //compatibilidad metodo navegadores
  private _getTransferencia(event:any){
    return event.dataTransfer?event.dataTransfer:event.originalEvent.dataTrasfer
  }

  private _extraerArchivos(archivosLista:FileList){
    console.log(archivosLista);

    for( const propiedad in Object.getOwnPropertyNames(archivosLista)){
      const archivoTemporal = archivosLista[propiedad];
      if(this._archivoPuedeSerCargado(archivoTemporal)){
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }
    console.log(this.archivos);
  }

  // validaciones
  private _archivoPuedeSerCargado(archivo: File): boolean {
    if (!this._archivoDropeado(archivo.name) && this._isImage(archivo.type))
      return true;
    else
      return false;
  }



  // prevenir que se habra la imagen
  private _prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoDropeado(nombreArchivo: string) {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo == nombreArchivo) {
        console.log('El archivo ' + nombreArchivo + ' ya esta agregado');
        return true;
      }
    }
    return false;
  }

  private _isImage(tipoArchivo: string) {
    return (tipoArchivo === '' || tipoArchivo === undefined) ?
        false :
        tipoArchivo.startsWith('image');
  }
}
