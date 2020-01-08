import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifComponent } from './gif/gif.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:"",component:HomeComponent},{path:'gifs/:id',component:GifComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
