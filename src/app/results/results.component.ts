import { Component, OnInit } from '@angular/core';
import { MixService } from '../mix.service';
import { HttpClient } from '@angular/common/http';

class Song {
  title: String;  
  link: String;  
  album: String;  
  artist: String;
  pic: String;

  constructor(t:String, l:String, a:String, ar:String, p:String) {
    this.title = t;
    this.link = l;
    this.album = a;
    this.artist = ar;
    this.pic = p;
  }
}

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})

export class ResultsComponent implements OnInit{
  public playlist:String[] = [];

  constructor(private myservice: MixService, private http: HttpClient) {
  }

  ngOnInit() {
    this.myservice.getFormattedList().subscribe(data => {
        console.log(data);
        this.playlist = data;
        console.log(this.playlist);
    }
    )

    console.log(this.playlist);
  }
}
