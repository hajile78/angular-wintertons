import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './partial/page/page.component';
import { PostComponent } from './partial/post/post.component';

const routes: Routes = [
  { path: ':page', component: PageComponent},
  { path: ':page/post/:id', component: PostComponent},
  { path: '**', redirectTo: 'Main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
