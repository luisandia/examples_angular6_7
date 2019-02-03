import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [` .table-responsive {
        margin-top: 15px;
      }
    `]
})
export class HeroesComponent {
  heroes: Heroe[] = [];
  loading: boolean = true;
  key: string;
  constructor(
      private _heroesService: HeroesService, private modalService: NgbModal) {
    this._heroesService.getHeroes().subscribe((data: Heroe[]) => {
      console.log(this.heroes);
      setTimeout(() => {
        this.heroes = data;
        this.loading = false
      }, 1000)
    });
  }

  delete(key$: string) {
    this.key = key$;
  }
  refresh(key: any) {
    console.log('eliminandooooo')
    console.log(key);
    delete this.heroes[this.key];
  }
}
