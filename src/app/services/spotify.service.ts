import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*
 forma automatica de importar servicio, no es necesario (es opcional) importarlo en el fichero
 "app.module.app"
 */
@Injectable({
  providedIn: 'root'
})
export class SpotifyService{
    constructor( private http: HttpClient){
        console.log('Spotify service listo');
    }

    getNewReleases(){
        this.http.get('https://api.spotify.com/v1/browse/new-releases');
    }
}