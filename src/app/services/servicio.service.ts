import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {


   }


  scrappingSoriana(){
    console.log(environment.URL_SORIANA);
    return this.http.get(environment.URL_SORIANA)
  }
}
