import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  private termino: string = '';

  constructor(public spotify: SpotifyService) { }

  buscarArtista() {
    if(this.termino.length == 0){
      return;
    }

    this.spotify.getArtistas(this.termino).subscribe();
  }

  ngOnInit() {
  }

}
