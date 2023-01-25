import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostsService } from 'src/app/posts.service';
import { ApiPostResults } from 'src/app/types/ApiPostResults';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  loading: boolean = true;
  postId: any;
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private service: PostsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
        this.postId = param.get('id')
        this.service.getPost(this.postId).subscribe((res: ApiPostResults) => {
          this.post = res.post[0]
          this.loading = false
        })
    })
  }
}
