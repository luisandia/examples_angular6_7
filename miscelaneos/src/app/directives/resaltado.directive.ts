import { Directive , ElementRef, HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  //ambos input son lo mismo
  //el primer input referencia que va a entrar desde fuera appResaltado pero se asignara a variable nuevoColor
  //el segundo input referencia que va a entrar desde fuera pero el nombre de la variable es el nombre del input desde fuera
  @Input("appResaltado") nuevoColor:string;
  @Input() appResaltado:string;
  constructor(private el:ElementRef) {
    console.log("Directiva LLamada");

    el.nativeElement.style.backgroundColor="yellow";
  }
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || "yellow");
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
