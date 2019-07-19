import { Injectable } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class SpotifyService{
    constructor(){
        console.log('Spotify service listo');
    }
}