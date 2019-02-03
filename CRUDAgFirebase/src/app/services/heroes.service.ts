// https://angular.io/guide/http#adding-headers IMPORTANTE!!!
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {Heroe} from './../interfaces/heroe.interface';

@Injectable({providedIn: 'root'})
export class HeroesService {
  heroesUrl = 'https://crudag-f7a64.firebaseio.com/heroes.json';
  heroeUrl = 'https://crudag-f7a64.firebaseio.com/heroes/';
  constructor(private http: HttpClient) {}

  newHero(heroe: Heroe) {
    console.log('servicio heroe')
    console.log(heroe)
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // https://angular.io/guide/http#making-a-post-request
    return this.http.post<Heroe>(this.heroesUrl, heroe, httpOptions)
        .pipe(map(res => {
          console.log('resultado new hero')
          console.log(res);
          return res;
        }));
  }

  updateHero(heroe: Heroe, key$: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // https://angular.io/guide/http#making-a-post-request
    return this.http
        .put<Heroe>(`${this.heroeUrl}${key$}.json`, heroe, httpOptions)
        .pipe(map(res => {
          console.log(res.nombre);
          return res;
        }));
  }

  getHeroe(key$: string) {
    console.log(`${this.heroeUrl}${key$}.json`);
    return this.http.get<Heroe>(`${this.heroeUrl}${key$}.json`);
  }

  getHeroes() {
    return this.http.get(this.heroesUrl).pipe(map(res => {
      console.log('lista heroes')
      console.log(res);
      return res;
    }));
  }

  deleteHero(key$: string) {
    const url = `${this.heroeUrl}/${key$}.json`;
    console.log(url);
    return this.http.delete<Heroe>(url).pipe(map(res=>{
      return res;
    }));
  }
}
