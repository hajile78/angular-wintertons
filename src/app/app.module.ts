import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './partial/app-header/app-header.component';
import { AppContentComponent } from './partial/app-content/app-content.component';
import { QuotesComponent } from './partial/quotes/quotes.component';
import { PageComponent } from './partial/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    QuotesComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
