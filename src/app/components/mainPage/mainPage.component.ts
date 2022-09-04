import { Component, OnInit } from '@angular/core';
import { SwitchThemeService } from 'src/app/services/switchTheme.service';
import { TranslationService } from 'src/app/services/translation.service';


@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss', '../header/header.component.scss']
})
export class MainPageComponent implements OnInit {

  public targetLanguage = '';
  public inputText = '';
  public transalatedText = '';
  public isSpinner: boolean = true;
  public isSpinnerTranslate: boolean = false;

  constructor(private translationService: TranslationService, public switchThemeService: SwitchThemeService) { }

  ngOnInit(): void {
    this.showSpinner()
  }

  public showSpinner(): void {
    setTimeout(() => {
      this.isSpinner = false;
    }, 3000);
  }

  public translate(): void {
    this.isSpinnerTranslate = true;
    setInterval(() => {

      let model = {
        "q": [this.inputText],
        "target": this.targetLanguage
      };
      this.translationService.translate(model).subscribe((response: any) => {
        this.transalatedText = response.data.translations[0].translatedText
      })
    }, 1500);

    setInterval(() => {
      this.isSpinnerTranslate = false;
    }, 1500);

  }

  public clearTextArea(): void {
    this.inputText = '';
    this.transalatedText = '';
  }

}
