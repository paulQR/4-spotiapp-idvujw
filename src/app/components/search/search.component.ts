import{Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html', 
})
export class SearchComponent {
    constructor(private spotify: SpotifyService){}

    buscar(termino: string){
      console.log(termino);
    }
}