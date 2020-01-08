import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifService } from '../services/gif-service.service';


@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  id: string;
  gif: any;
  constructor(private route: ActivatedRoute,private gifService: GifService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      this.id = params.get("id");
      this.gifService.getGifById(this.id).subscribe(gif => { 
        this.gif = gif.data;

      });
    });
  }

}
