import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { PostsService } from 'src/app/posts.service';
import { ApiResults } from 'src/app/types/ApiResults';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  posts: Post[] = [];
  postId: any;
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private service: PostsService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
        this.postId = param.get('page')
        this.service.getPosts(this.postId).subscribe((res: ApiResults) => {
          this.posts = res.posts
          this.loading = false
        })
    })
  }


}
