import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  quotes$!: Observable<Quote[]>;
  // quotes: Quote[]
  constructor(
    private service: QuotesService
  ) {}

  ngOnInit(): void {
    this.quotes$ =
        this.service.getQuotes()(this.postId).subscribe((res: ApiPageResults) => {
          this.posts = res.posts
          this.loading = false
        })


  }
}
