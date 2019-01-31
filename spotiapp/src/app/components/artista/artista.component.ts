import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista:any={};
  loadingArtist:boolean;
  topTracks:any[]=[];

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) {
    this.router.params.subscribe( params=>{

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id:string){
    this.loadingArtist=true;

    this.spotify.getArtista(id)
    .subscribe( artista=>{
      this.artista=artista
      this.loadingArtist=false
    })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
    .subscribe( tracks=>{
      this.topTracks=tracks
      console.log(this.topTracks)
    })
  }


}
