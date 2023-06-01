import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { takeWhile } from 'rxjs';
import { PostsService } from 'src/app/services/posts/posts.service';
import { ApiPageResults } from 'src/app/types/ApiPageResults';
import { ApiPostResults } from 'src/app/types/ApiPostResults';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Output() setRandom = new EventEmitter<number>()
  posts: Post[] = [];
  postsEmpty: boolean = false
  postId: string | null = null;
  loading: boolean = true;
  alive: boolean = true;
  postPage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    console.log('Page component called')
    this.route.paramMap.subscribe((param) => {
        this.postPage = param.get('page')
        this.postId = param.get('id')
        console.log(`page: ${this.postPage} id: ${this.postId}`)
        if(this.postId === null && this.postPage !== null){
          this.postService.getPosts(this.postPage)
          .pipe(takeWhile(() => this.alive))
          .subscribe((res: ApiPageResults) => {
            this.posts = res.posts
            this.postsEmpty = res.posts.length === 0
            this.loading = false
          })
        } else {
          this.postService.getPost(this.postId || '0')
          .pipe(takeWhile(() => this.alive))
          .subscribe((res: ApiPostResults) => {
            res.post[0].id = this.postId ? this.postId : '0';
            this.posts = res.post
            this.postsEmpty = res.post.length === 0
            this.loading = false
          })
        }
    })
  }

}
