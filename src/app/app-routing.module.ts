import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './partial/page/page.component';

const routes: Routes = [
  { path: ':page', component: PageComponent},
  { path: 'post/:id', component: PageComponent},
  { path: '**', redirectTo: 'Main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
