import { Component, Input, OnInit} from '@angular/core';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: false
})
export class PostComponent implements OnInit {
  postId: any;
  @Input() loading: boolean = true;
  @Input() post!: Post;

  ngOnInit(): void {
    if (this.post.id) {
      this.loading = false
      return
    }

  }

}
