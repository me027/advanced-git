import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteConfigLoadStart, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MyMovieListComponent } from './movie-list/my-movie-list/my-movie-list.component';
import { AboutMbComponent } from './about-mb/about-mb.component'; 
import { Movie1Component } from './movie-list/my-movie-list/movie1/movie1.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import {HttpClientModule} from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
 
const appRoutes: Routes  = [  
  { path: "", component: HomeComponent},
  { path: "my-movies", component: MovieListComponent}, 
  { path: "about-mb", component: AboutMbComponent}, 
  { path: "auth", component: AuthComponent}, 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MyMovieListComponent,
    AboutMbComponent,
    Movie1Component,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,  
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
