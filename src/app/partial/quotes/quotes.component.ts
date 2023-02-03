import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  @Input() quotes$!: Quote[];
  @Input() random!: number
  quote!: Quote;

  constructor() {
    console.log('constructor' + this.quotes$)
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.quote = this.quotes$[this.random]
  }

}
