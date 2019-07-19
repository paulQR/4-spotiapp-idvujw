import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
        const headers = new HttpHeaders({
          'Authorization': ''
        });
        /*
          this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', { headers }).subscribe(data =>{
            console.log(data);
          });        
        */
        /*
        this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(data =>{
          console.log(data);
        });
        */
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });        
    }
}