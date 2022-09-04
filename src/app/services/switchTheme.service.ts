import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchThemeService {

  public isDarkTheme = false;

  constructor() { }

  public switchMode(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }

}


