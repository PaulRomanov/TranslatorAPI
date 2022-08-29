import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

constructor(private http: HttpClient) {
  
}

translate() {
  this.http.post("https://translation.googleapis.com/language/translate/v2?key="+environment.apiKey, 
  {
    "q": [this.inputText],
    "target": this.targetLanguage
  }).subscribe((response:any)=>{
    this.transalatedText=response.data.translation[0].transalatedText
  })
}

}
