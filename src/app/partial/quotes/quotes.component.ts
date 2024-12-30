import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  @Input() random!: Quote;
  quotes!: Quote[];
  quote!: Quote;
  alive: boolean = true;

  constructor(private service: QuotesService, private router: Router) {
    console.log('constructor' + JSON.stringify(this.quotes));
  }

  // getRandom() {
  //   let length: number = this.quotes.length;
  //   return Math.floor(Math.random() * length);
  // }

  ngOnInit(): void {
    console.log('onInit quote component');
    this.quote = this.service.getRandom();
  }

  ngOnChanges(): void {
    console.log('onChange quote component');
    this.quote = this.service.getRandom();
    console.log('quote component quote: ', this.quote);
  }
}
