import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BookingsPageComponent } from './bookings-page/bookings-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  {path: "",component: HomePageComponent},

  {path:"bookings-page",component: BookingsPageComponent},

  {path:"blog-page",component: BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
