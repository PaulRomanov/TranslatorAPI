import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'TranslatorAPI';
  public targetLanguage = '';
  public inputText = '';
  public transalatedText = '';
  public isSpinner: boolean = true;
  public isSpinnerTranslate: boolean = false;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.showSpinner()
  }

  public showSpinner(): void {
    setTimeout(() => {
      this.isSpinner = false;
    }, 3000);
  }

  public  translate(): void {
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

}
