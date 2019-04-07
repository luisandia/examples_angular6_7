import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {

  transform(listas: Lista[], finished: boolean = true): Lista[] {
    return listas.filter(lista => lista.finished === finished);
  }

}
