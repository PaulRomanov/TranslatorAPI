import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './components/favoritesPage/favoritesPage.component';
import { MainPageComponent } from './components/mainPage/mainPage.component';

const routes: Routes = [
  { path: 'MainPage', component: MainPageComponent },
  { path: 'FavoritesPage', component: FavoritesPageComponent },
  { path: '**', component: MainPageComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
