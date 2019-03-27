import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishesService: WishesService, private router: Router, private alertController: AlertController) {

  }

  async addList() {
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type:'text',
          placeholder: 'Name list'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel')
        }
      },
      {
        text: 'Create',
        handler: (data) => {
          console.log(data)
          if(data.title.length===0){
            return;
          }
          this.wishesService.createList(data.title);
        }
      }
      ]
    })
    alert.present();
  }
}
