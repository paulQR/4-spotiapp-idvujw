import { Injectable } from '@angular/core';

/*
 forma automatica de importar servicio, no es necesario importarlo en el fichero
 "app.module.app"
 */
@Injectable({
  providedIn: 'root'
})

//@Injectable()
export class SpotifyService{
    constructor(){
        console.log('Spotify service listo');
    }
}