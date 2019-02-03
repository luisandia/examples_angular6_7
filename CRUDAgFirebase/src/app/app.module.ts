import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './pipes/keys.pipe';
import { ModalComponent } from './widgets/modal/modal.component';
import {NgbModule, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule, AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [NgbActiveModal,NgbModal],
  bootstrap: [AppComponent],

})
export class AppModule { }
