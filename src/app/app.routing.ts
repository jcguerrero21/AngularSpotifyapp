import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtistComponent } from './components/artist/artist.component';

const app_routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'buscador',
        component: BuscadorComponent
    },
    {
      path: 'artist/:id',
      component: ArtistComponent  
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'inicio'
    }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });