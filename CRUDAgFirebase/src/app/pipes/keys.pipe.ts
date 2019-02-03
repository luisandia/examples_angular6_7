import { Pipe, PipeTransform } from '@angular/core';
// para que el pipe este pendiente del ciclo de cambios de angular(como borrar fila por ejm)
@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];
    // console.log(value)
    // tslint:disable-next-line:forin
    for (const key in value ) {
      // console.log("llave "+key)
      keys.push(key);
    }
    return keys;
  }

}
