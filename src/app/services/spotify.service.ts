import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private artistas: any[] = [];
  private urlSpotify: string = 'https://api.spotify.com/v1/';
  private token: string = 'BQDB9GCew6klpyUNBglHaQipiUXxyCehY8m8QP8FpJtWTB5EEAD28dE67_WFw2MJaFUI3oJ72j4I1Dp8c3Y';

  constructor(public http: HttpClient) {
    console.log('Servicio de spotify listo');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTop(id: string) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtista(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtistas(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map(
      (respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }

}
