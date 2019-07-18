import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//<--- Modulo de rutas
import { RouterModule } from '@angular/router';

// peticion http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';

// importar rutas
import { ROUTES } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES, {useHash:true}) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ArtistaComponent, SearchComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
