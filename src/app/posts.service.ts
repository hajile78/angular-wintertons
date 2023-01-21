import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResults } from './types/ApiResults';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(id: string) {
    const server: string = 'https://apiwintertons.uc.r.appspot.com/postsBy/'
    return this.http.get<ApiResults>(`${server}${id}`)
    //return req
    //return [{id: '1', body: 'body', title: 'title', user: 'user', created: new Date('1/1/2023')}]
  }
}
