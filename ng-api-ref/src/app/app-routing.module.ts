import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }