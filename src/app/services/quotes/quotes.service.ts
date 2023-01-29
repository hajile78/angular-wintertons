import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiQuoteResults } from 'src/app/types/ApiQuoteReults';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private server = 'https://apiwintertons.uc.r.appspot.com/'
  constructor(private http: HttpClient) { }

  getQuotes() {
    const endpoint: string = 'quotes/'
    return this.http.get<ApiQuoteResults>(`${this.server}${endpoint}`)
  }
}
