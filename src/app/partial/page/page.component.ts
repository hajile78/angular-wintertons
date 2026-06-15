import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { PostsService } from "../../services/posts/posts.service";
import { ApiPageResults } from "../../types/ApiPageResults";
import { ApiPostResults } from "../../types/ApiPostResults";
import { Post } from "../../types/Post";

type PageState = {
  posts: Post[];
  empty: boolean;
};

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
  standalone: false,
})
export class PageComponent implements OnInit {
  @Output() setRandom = new EventEmitter<number>();
  postsState$!: Observable<PageState>;
  postId: string | null = null;
  postPage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
  ) {}

  ngOnInit(): void {
    console.log("Page component called");
    this.postsState$ = this.route.paramMap.pipe(
      switchMap((param) => {
        this.postPage = param.get("page");
        this.postId = param.get("id");
        console.log(`page: ${this.postPage} id: ${this.postId}`);

        if (this.postId === null && this.postPage !== null) {
          return this.postService.getPosts(this.postPage).pipe(
            map((res: ApiPageResults) => {
              const posts = res.posts ?? [];
              return {
                posts,
                empty: posts.length === 0,
              };
            }),
            catchError((error) => {
              console.error("Failed to load posts", error);
              return of({ posts: [], empty: true });
            }),
          );
        }

        return this.postService.getPost(this.postId || "0").pipe(
          map((res: ApiPostResults) => {
            const posts = res.post ?? [];
            if (posts[0]) {
              posts[0].id = this.postId ? this.postId : "0";
            }

            return {
              posts,
              empty: posts.length === 0,
            };
          }),
          catchError((error) => {
            console.error("Failed to load post", error);
            return of({ posts: [], empty: true });
          }),
        );
      }),
    );
  }
}
