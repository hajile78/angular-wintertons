import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './partial/page/page.component';

const routes: Routes = [
  { path: 'nav/:page', component: PageComponent},
  { path: '**', redirectTo: 'nav/Main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
