import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, startWith } from "rxjs";
import { QuotesService } from "../../services/quotes/quotes.service";
import { Quote } from "../../types/ApiQuoteReults";

type QuoteState = {
  quote: Quote | null;
  loading: boolean;
  empty: boolean;
};

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.scss"],
  standalone: false,
})
export class QuotesComponent implements OnChanges {
  @Input() random = 0;
  quoteState$!: Observable<QuoteState>;
  private randomTrigger$ = new BehaviorSubject<number>(0);

  constructor(private service: QuotesService) {
    this.quoteState$ = combineLatest([this.service.quotes$, this.randomTrigger$]).pipe(
      map(([quotes]) => {
        if (!quotes.length) {
          return {
            quote: null,
            loading: false,
            empty: true,
          };
        }

        const index = Math.floor(Math.random() * quotes.length);
        return {
          quote: quotes[index] ?? null,
          loading: false,
          empty: false,
        };
      }),
      startWith({
        quote: null,
        loading: true,
        empty: false,
      }),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["random"]) {
      this.randomTrigger$.next(this.random);
    }
  }
}
