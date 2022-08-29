import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http:HttpClient) { }

  translate(model:any){
    return this.http.post("https://translation.googleapis.com/language/translate/v2?key="+environment.apiKey,model);
  }
}