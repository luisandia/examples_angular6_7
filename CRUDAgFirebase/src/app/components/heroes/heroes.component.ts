import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
// import { ModalComponent } from 'src/app/widgets/modal/modal.component';
// import {ModalComponent} from '../../widgets/modal/modal.component';

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
      // this.loading = false;
    });
  }


  // delete(key$: string) {
  //   const selectHeroQuestion =
  //       `¿Estás segur@ de querer borrar el heroe ${this.heroes[key$].name}?`;
  //   const modalRef = this.modalService.open(ModalComponent);
  //   modalRef.componentInstance.title = 'Eliminar heroe';
  //   modalRef.componentInstance.body = selectHeroQuestion;
  //   modalRef.componentInstance.key$ = key$;
  //   modalRef.componentInstance.heroes = this.heroes;
  // }

  delete(key$: string) {
    this.key = key$;
    // this._heroesService.deleteHero(key$).subscribe(respuesta => {
    //   console.log(respuesta)
    //   if (respuesta) {
    //     console.error(respuesta);
    //   }
    //   else {
    //     delete this.heroes[key$];
    //   }
    // })
  }
  refresh(key: any) {
    console.log('eliminandooooo')
    console.log(key);
    delete this.heroes[this.key];
    // if (this.heroes.length == 0) {
    //   this.loading = true;
    // }
  }
}
