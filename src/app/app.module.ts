import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//mis importaciones
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//routing
import { app_routing } from './app.routing';

//services
import { SpotifyService } from './services/spotify.service';

//components
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinFotoPipe } from './pipes/sin-foto.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscadorComponent,
    NavbarComponent,
    SinFotoPipe,
    ArtistComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
