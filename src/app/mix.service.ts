import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

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