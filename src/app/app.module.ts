import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageModule } from './components/mainPage/mainPage.module';
import { SpinnerModule } from './components/spinner/spinner.module';
import { FavoritesPageModule } from './components/favoritesPage/favoritesPage.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule, 
    BrowserAnimationsModule,
    SpinnerModule,
    MainPageModule,
    FavoritesPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
