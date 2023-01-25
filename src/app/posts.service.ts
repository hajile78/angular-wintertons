import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPageResults } from './types/ApiPageResults';
import { ApiPostResults } from "./types/ApiPostResults"

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private server = 'https://apiwintertons.uc.r.appspot.com/'
  constructor(private http: HttpClient) { }

  getPosts(id: string) {
    const endpoint: string = 'postsBy/'
    return this.http.get<ApiPageResults>(`${this.server}${endpoint}${id}`)
    //return req
    //return [{id: '1', body: 'body', title: 'title', user: 'user', created: new Date('1/1/2023')}]
  }

  getPost(id: string) {
    const endpoint: string = 'getPost/'
    return this.http.get<ApiPostResults>(`${this.server}${endpoint}${id}`)
  }
}
