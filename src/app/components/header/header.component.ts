import { Component, EventEmitter, Input, Output} from '@angular/core';
import { SwitchThemeService } from 'src/app/services/switchTheme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  constructor(public switchThemeService: SwitchThemeService) { }
 
}
