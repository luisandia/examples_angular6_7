import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component(
    {selector: 'app-data', templateUrl: './data.component.html', styles: []})
export class DataComponent implements OnInit {
  forma: FormGroup;
  usuario: any = {
    nombrecompleto: {nombre: 'Luis', apellido: 'Andia'},
    correo: 'luis@gmail.com',
    pasatiempos: ['Correr', 'Dormir', 'Comer']
  };
  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        nombre: new FormControl(
            'Fernando',
            [Validators.required, Validators.minLength(3), this.noLuis]),
        apellido: new FormControl('', Validators.required),
      }),
      correo: new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
          ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required),
        new FormControl('Correr', Validators.required),
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', [],this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(),
    });
    // this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators(
        [Validators.required, this.noIgual.bind(this)]);

        this.forma.valueChanges.subscribe( data=>{
          console.log(data);
        })
        // solo un control
        this.forma.controls['username'].valueChanges.subscribe( data=>{
          console.log(data);
        })

        this.forma.controls['username'].statusChanges.subscribe( data=>{
          console.log(data);
        })
  }

  guardarCambios() {
    console.log(this.forma);
    // reset a valores por defecto
    // this.forma
    //     .reset(this.usuario)
    // reset a objeto vacio
    // this.forma.reset(
    //     {nombrecompleto: {nombre: '', apellido: ''}, correo: ''});

    this.forma.controls['correo'].setValue('NuevoCorreo@gmail.com')
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos'])
        .push(new FormControl('Dormir', Validators.required));
  }

  noLuis(control: FormControl): {[s: string]: boolean} {
    console.log(control.value)
    if (control.value == 'luisandia') {
      return {
        noluis: true,
      }
    }
    return null;
  }

  noIgual(control: FormControl): {[s: string]: boolean} {
    if (control.value !== this.forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Observable<any> {
    console.log('validando')
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
                                if (control.value == 'admin') {
                                  resolve({existe: true})
                                } else {
                                  resolve(null)
                                }
                              }, 3000)})
    return promesa;
  }
  ngOnInit() {}
}
