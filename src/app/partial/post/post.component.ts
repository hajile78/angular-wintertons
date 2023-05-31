import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { ApiPostResults } from 'src/app/types/ApiPostResults';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postId: any;
  @Input() loading: boolean = true;
  @Input() post!: Post;


  constructor(
    private service: PostsService
  ) {}

  ngOnInit(): void {
    if (this.post.id) {
      this.loading = false
      return
    }

  }

  ngOnDestroy(): void {
    // console.log(JSON.stringify(this.post))
    this.postId = null
  }
}
