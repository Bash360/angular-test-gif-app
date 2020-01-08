import { Component } from '@angular/core';
import { GifService } from 'src/app/services/gif-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gif-app';
  gifs: Array<any>;
  constructor(private gifService: GifService) { 

  }
  searchText(search) {
    this.gifService.getGifs(search).subscribe(gifs => { 
      this.gifs = gifs.data;
    })
  }


}
