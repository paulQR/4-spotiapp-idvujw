import{Component, OnInit} from '@angular/core';
//import{HttpClient} from '@angular/common/http';

import{ SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
})
export class HomeComponent {

    /*
    paises: any[] = [];
    constructor( private http: HttpClient ){
        console.log('Constructor del home hecho')
        this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp:any) =>{
          this.paises = resp;
          console.log(resp)
        });
    }
    */
    constructor( private spotify: SpotifyService ){
        this.spotify.getNewReleases();
    }

}