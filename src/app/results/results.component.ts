import { Component } from '@angular/core';
import { MixService } from '../mix.service';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  songs: any[] = [];

  constructor() {
    this.songs = [{
      title: "a",
      artist: "b",
      link: "https://open.spotify.com/"
    },
    {
      title: "c",
      artist: "d",
      link: "https://open.spotify.com/"
    },
    {
      title: "e",
      artist: "f",
      link: "https://open.spotify.com/"
    },
    ];
  }
}
