import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) { }

  search(val){
    console.log(val);
  }

  getTrackings(){
    return this.http.get(this.apiUrl)
  }

  

}
