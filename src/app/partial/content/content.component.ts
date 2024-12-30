import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, takeWhile } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  alive: boolean = true;
  random: Quote = {} as Quote;
  quotes$: Observable<Quote[]>;

  constructor(private service: QuotesService, private router: Router) {
    this.quotes$ = this.service.quotes$;
  }

  ngOnInit(): void {
    console.log('content class called');
    this.router.events.pipe(takeWhile(() => this.alive)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.random = this.service.getRandom();
      }
    });
  }
}
