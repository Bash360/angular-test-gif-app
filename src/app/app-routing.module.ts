import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifComponent } from './gif/gif.component';


const routes: Routes = [{path:"gif/:id",component:GifComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
