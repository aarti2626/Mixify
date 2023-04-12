import { Component } from '@angular/core';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  title: string;
  artist: string;

  constructor() {
    this.title = "a";
    this.artist = "b";
  }
}
