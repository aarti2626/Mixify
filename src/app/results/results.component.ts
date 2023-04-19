import { Component, OnInit } from '@angular/core';
import { MixService } from '../mix.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})

export class ResultsComponent implements OnInit{
  public playlist:string[] = [];

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
