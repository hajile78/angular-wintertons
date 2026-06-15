import { Component, Input } from "@angular/core";
import { Post } from "../../types/Post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  standalone: false,
})
export class PostComponent {
  postId: any;
  @Input() post!: Post;
}
