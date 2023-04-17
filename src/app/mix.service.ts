import { Injectable } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormatWidth } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MixService {

  public playlist: string[] = [];
  public formatted: any[] = [];

  constructor(private http: HttpClient) {
   }

  getList(results:number[]) {
    return this.http.post<any>('http://localhost:8080/results', results).toPromise();
  }

  getFormattedList(){
    return this.http.get<any>('http://localhost:8080/results');
  }
}