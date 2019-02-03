import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroeComponent} from './components/heroes/heroe.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {KeysPipe} from './pipes/keys.pipe';
import {ModalComponent} from './widgets/modal/modal.component';

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
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
