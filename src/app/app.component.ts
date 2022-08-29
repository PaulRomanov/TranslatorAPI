import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TranslatorAPI';
  targetLanguage = '';
  inputText = '';
  transalatedText = '';

constructor(private translationService: TranslationService) {
  
}

translate(){
  let model={
    "q": [this.inputText],
    "target": this.targetLanguage
  };
   this.translationService.translate(model).subscribe((response:any)=>{
    this.transalatedText=response.data.translations[0].translatedText
  })
}

}
