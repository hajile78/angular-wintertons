import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostsService } from 'src/app/services/posts/posts.service';
import { ApiPageResults } from 'src/app/types/ApiPageResults';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Output() setRandom = new EventEmitter<number>()
  posts: Post[] = [];
  postId: any;
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private service: PostsService
  ) {}

  ngOnInit(): void {
    console.log('Page component called')
    this.route.paramMap.subscribe((param) => {
        this.postId = param.get('page')
        this.service.getPosts(this.postId).subscribe((res: ApiPageResults) => {
          this.posts = res.posts
          this.loading = false
        })
    })
  }
  



}
