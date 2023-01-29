import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { ApiQuoteResults, Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  quotes!: Quote[]
  constructor(
    private service: QuotesService
  ) {
    this.service.getQuotes().subscribe((res: ApiQuoteResults) => {
      this.quotes = res.quotes
    })
  }
}
