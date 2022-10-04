import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  public getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
