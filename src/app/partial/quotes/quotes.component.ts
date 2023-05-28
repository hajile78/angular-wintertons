import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  @Input() random: number | undefined
  quotes!: Quote[]
  quote!: Quote;
  alive: boolean = true;

  constructor(private service: QuotesService, private router: Router) {
    console.log('constructor' + JSON.stringify(this.quotes))
  }

  getRandom() {
    let length: number = this.quotes.length;
    return Math.floor(Math.random() * length);
  }

  ngOnInit(): void {
    console.log("onInit quote component")
    this.service.quotes$
    .pipe(takeWhile(() => this.alive))
    .subscribe((qutoes) => {
      this.quotes = qutoes
      this.random = this.getRandom();
      this.quote = qutoes[this.random]
    });

  }

  ngOnChanges(): void {
    console.log("onChange quote component")
    if(this.quotes && this.random) {
      this.quote = this.quotes[this.random]
    }
  }

}
