import { Injectable } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormatWidth } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MixService {

  constructor(private http: HttpClient) { }

  getList(results:number[]) {
    return this.http.post<any>('http://localhost:8080/results', results).toPromise();
  }

  getFormattedList() { 
    
    let formatted: string[] = [];
    this.http.get<string[]>('http://localhost:8080/results').subscribe(data => {
        formatted = [...data];
        console.log(formatted);
    }
    )
    return formatted;
}
}