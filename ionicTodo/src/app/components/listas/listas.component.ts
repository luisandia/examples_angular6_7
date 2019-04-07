import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) list: IonList;
  @Input() finished = true;
  constructor(public wishesService: WishesService, private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  selectionlist(lista) {
    console.log(this.finished);
    if (this.finished)
      this.router.navigateByUrl(`/tabs/tab2/add/${lista.id}`);
    else {
      this.router.navigateByUrl(`/tabs/tab1/add/${lista.id}`);
    }
  }

  async editList(lista: Lista) {
    const alert = await this.alertController.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: lista.title,
          placeholder: 'Name list'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel')
          this.list.closeSlidingItems();
        }
      },
      {
        text: 'Update',
        handler: (data) => {
          console.log(data)
          if (data.title.length === 0) {
            return;
          }
          lista.title = data.title;
          this.wishesService.saveStorage();
          this.list.closeSlidingItems();
        }
      }
      ]
    })
    alert.present();


  }

  delete(lista: Lista) {
    this.wishesService.deleteList(lista);
  }
}
