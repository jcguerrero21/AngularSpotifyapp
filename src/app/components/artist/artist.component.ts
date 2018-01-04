import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private artista: any = {};
  private canciones: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, public spotify: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params.map(params => params['id'])
      .subscribe(id => {
        console.log(id);
        this.spotify.getArtista(id)
          .subscribe(artista => {
            console.log(artista);
            this.artista = artista;
          });

        this.spotify.getTop(id).map((respuesta: any) => respuesta.tracks)
          .subscribe(canciones => {
            console.log(canciones);
            this.canciones = canciones;
          });

      });

  }

}
