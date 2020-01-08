import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif-service.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
    title = 'gif-app';
    gifs: Array<any>;
    constructor(private gifService: GifService) {}
    searchText(search) {
        this.gifService.getGifs(search).subscribe(gifs => {
            this.gifs = gifs.data;
        });
    }
}
