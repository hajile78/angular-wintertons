import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/types/ApiQuoteReults';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  @Input() quote!: Quote;

  constructor() {}
  ngOnInit(): void {

  }



}
