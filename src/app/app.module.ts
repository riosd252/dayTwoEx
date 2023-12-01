import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { DetailsComponent } from './components/details/details.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'active-posts/:id', component: DetailsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: 'inactive-posts/:id', component: DetailsComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id', component: UserInfoComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    DetailsComponent,
    UsersComponent,
    UserInfoComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
