import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:3000/';


  onSubmit( formData : any): Observable<any> {
    console.log(formData);

    return this.http.post(this.url + 'user/create',formData);
  }
}
