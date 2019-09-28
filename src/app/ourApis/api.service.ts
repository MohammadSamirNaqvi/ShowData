import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ApiService{
    constructor(private http: HttpClient){
    }
    public getData():any{
        return this.http.get('http://mapi.sparktech.co.in/mms/rawitems.php');
    }
}