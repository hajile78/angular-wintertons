import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiQuoteResults, Quote } from 'src/app/types/ApiQuoteReults';
import { map, of, pipe, shareReplay, takeWhile } from 'rxjs';
import { LocalService } from '../local/local.service';

interface LocalData {
  expire: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private server = 'https://apiwintertons.uc.r.appspot.com/';

  alive: boolean = true;
  quotes$ = this.getQuotes();
  quotes!: Quote[];

  constructor(private http: HttpClient, private localService: LocalService) {}

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
      this.localService.saveData('quotes', JSON.stringify(qutoes));
      this.quotes = qutoes;
    });
  }

  getRandom() {
    let local = {} as LocalData;
    this.localService.getData('quotes').subscribe((data) => (local = data));

    let now = parseInt(new Date().getTime().toString());
    let elapsedTime = now - parseInt(local.expire || '0');
    console.log(elapsedTime);
    if (local && now - parseInt(local.expire || '0') < 30000) {
      console.log('local Data exists using local cache');
      this.quotes = JSON.parse(local.data);
    } else {
      this.setQuotes();
      console.log(
        'local Data cache expired or does not exist getting new data'
      );
      this.localService.removeData('quotes');
    }

    let length: number = this.quotes === undefined ? 0 : this.quotes.length;
    return this.quotes[Math.floor(Math.random() * length)];
  }
}
