import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title;
  @Input() body;
  @Input() key$;
  @Input() heroes;
  @Output() confirmacion: EventEmitter<any>;

  constructor(private _heroesService: HeroesService) {
    this.confirmacion= new EventEmitter();

  }

  confirm() {
    console.log('OK', this.key$);
    this._heroesService.deleteHero(this.key$).subscribe(response => {
      console.log(response);
      if (response) {
        console.error(response);
      } else {
        // delete this.heroes[this.key$];
        this.confirmacion.emit(this.key$);
      }
    });
  }
}
