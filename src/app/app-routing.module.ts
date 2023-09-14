import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBusquedaComponent } from './movie/busqueda/movie-busqueda/movie-busqueda.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieBusquedaComponent
  },
  {
    path: '**',
    redirectTo: 'movie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
