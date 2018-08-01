import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  //private apiUrl = 'http://localhost:8000/api/all-services/2';
  /* private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; */
  //private apiUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(public http: HttpClient) { }

  search(val){
    console.log(val);
  }

  getTrackings(){
    return this.http.get(this.apiUrl)
  }

  

}
