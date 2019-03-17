import { ListaItem } from './lista-item.model';

export class Lista {

  id: number;
  title: string;
  createAt: Date;
  endAt: Date;
  finished: boolean;
  items: ListaItem[];

  constructor(title) {
    this.title = title;
    this.createAt = new Date();
    this.finished = false;
    this.items = [];
    this.id = new Date().getTime();
  }
}

