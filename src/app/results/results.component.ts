import { Component } from '@angular/core';
import { MixService } from '../mix.service';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  songs: String[] = [];

  constructor() {
    this.songs = ["a", "b", "c", "d"];
  }
}
