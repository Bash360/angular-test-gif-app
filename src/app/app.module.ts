import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { GifCardComponent } from './gif-card/gif-card.component';
import { GifComponent } from './gif/gif.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    ResultsListComponent,
    GifCardComponent,
    GifComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
