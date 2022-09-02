import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favoritesPage.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FavoritesPageComponent],
  exports: [FavoritesPageComponent],
})
export class FavoritesPageModule { }
