import { Component, OnInit } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: Lista;
  itemName = '';
  constructor(private wishedService: WishesService, private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.wishedService.getList(listId);
  }

  ngOnInit() {
  }
  addItem() {
    if (this.itemName.length === 0) { return; }
    const newItem = new ListaItem(this.itemName);
    this.list.items.push(newItem);
    this.wishedService.saveStorage();
  }
  changeCheck(item: ListaItem) {
    const todo = this.list.items.filter(itemData => !itemData.compleado).length;
    if (todo === 0) {
      this.list.endAt = new Date();
      this.list.finished = true;
    } else {
      this.list.endAt = null;
      this.list.finished = false;
    }
    this.wishedService.saveStorage();
  }

  delete(i:number){
    console.log("borrando ",i);
    console.log(this.list);
    this.list.items.splice(i,1);
    this.wishedService.saveStorage();
  }
}
