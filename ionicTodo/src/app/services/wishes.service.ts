import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  listas: Lista[] = [];

  constructor() {
    this.loadStorage()
    // const list1 = new Lista('recolect stones');
    // const list2 = new Lista('Heroes to dissapear');
    // this.listas.push(list1, list2);
  }

  createList(title: string) {
    const newList = new Lista(title);
    this.listas.push(newList);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  loadStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
