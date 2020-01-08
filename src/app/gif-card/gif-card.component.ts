import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() id: string;
  constructor() { }

  ngOnInit() {
  }

}
