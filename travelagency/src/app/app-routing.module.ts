import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelsListComponent } from './travels-list/travels-list.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"travels", component: TravelsListComponent
  },
  {
    path:"blog", component: BlogComponent
  },
  {
    path:"cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
