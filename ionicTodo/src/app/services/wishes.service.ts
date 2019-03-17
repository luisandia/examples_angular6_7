import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  listas: Lista[] = [];

  constructor() {
    const list1 = new Lista('recolect stones');
    const list2 = new Lista('Heroes to dissapear');
    this.listas.push(list1,list2);
   }
}
