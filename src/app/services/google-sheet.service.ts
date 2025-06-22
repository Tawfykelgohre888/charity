import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {
  constructor(private readonly httpClient: HttpClient) {}



  // forM Volunteer
  urlApi = 'https://sheetdb.io/api/v1/nvd6kgxclea1s'
  sendVolunteerData(data:any):Observable<any>{
   return this.httpClient.post(this.urlApi,{data})
  }


  // form Content
    urlsApi = 'https://sheetdb.io/api/v1/kzhwlj5hku4to'
  sendContentData(data:any):Observable<any>{
    return this.httpClient.post(this.urlsApi,{data})
  }


  // form Donation
  

}
