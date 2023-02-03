import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local/local.service';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { ApiQuoteResults, Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  quotes!: Quote[]
  random: number = 0;
  // quote!: Quote

  constructor(
    private service: QuotesService,
    localStorage: LocalService
  ) {}

  getRandom(length: number) {
    return Math.floor(Math.random() * length)
  }

  ngOnInit(): void {
    console.log("content class called")
    if(this.quotes === undefined || this.quotes.length <= 0) {
      this.service.getQuotes().subscribe((res: ApiQuoteResults) => {
        console.log('response:' + JSON.stringify(res))
        this.quotes = res.quotes
        // this.quote = this.quotes[this.getRandom(res.quotes.length)]
      })
    } else {
      // this.quote = this.quotes[this.getRandom(this.quotes.length)]
    }
  }

  ngOnChanges(): void {
    this.random = this.getRandom(this.quotes.length)
  }
}
