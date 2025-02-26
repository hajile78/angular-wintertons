import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiQuoteResults, Quote } from 'src/app/types/ApiQuoteReults';
import { map, shareReplay, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private server = 'https://apiwintertons.uc.r.appspot.com/';
  constructor(private http: HttpClient) {}
  alive: boolean = true;
  quotes$ = this.getQuotes();
  quotes: Quote[] | undefined;

  getQuotes() {
    const endpoint: string = 'quotes';
    return this.http.get<ApiQuoteResults>(`${this.server}${endpoint}`).pipe(
      map((results) => results.quotes),
      shareReplay(1),
      takeWhile(() => this.alive)
    );
  }

  setQuotes() {
    this.quotes$.subscribe((qutoes) => {
      this.quotes = qutoes;
    });
  }

  getRandom() {
    this.setQuotes();
    let length: number = this.quotes === undefined ? 0 : this.quotes.length;
    return Math.floor(Math.random() * length);
  }
}
