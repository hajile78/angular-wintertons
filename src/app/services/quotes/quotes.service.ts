import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiQuoteResults } from "../../types/ApiQuoteReults";
import { map, shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuotesService {
  private server = "https://api.wintertons.us/";
  quotes$ = this.getQuotes();
  constructor(private http: HttpClient) {}

  getQuotes() {
    const endpoint: string = "quotes";
    return this.http
      .get<ApiQuoteResults>(`${this.server}${endpoint}`)
      .pipe(map((results) => results.quotes), shareReplay(1));
  }
}
