import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAKBdMHa8ZE4eCuRBfr9R6QNzlRTAWa_GScJfR5He_o14P5ke0FW83RFuMz9zNpwMtKVoemtBi-EGJZb2E'
    })
    return this.http.get(url,{headers})

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
    .pipe( map(data=>{
      return data['albums'].items
    }))
  }
  getArtistas(artista:string){

    return this.getQuery(`search?q=${artista}&type=artist&limit=15`)
    .pipe( map(data=>
       data['artists'].items
    ))
  }
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map(data=>data['tracks']
   ));
  }
}
