export class ListaItem {
  desc: string;
  finished: boolean;

  constructor(desc: string) {
    this.desc = desc;
    this.finished = false;
  }
}