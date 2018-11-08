import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LufthansaDataService {

  url = 'https://api.lufthansa.com/v1';

  constructor(private http: HttpClient) { }

  getInformation(): Observable<any> {

    const headers = new HttpHeaders()
    .set('X-Mashape-Key', '0JLBKYq2OjmshWNxEkzneQpvnkTFp1AMEpRjsngMVWjwR3kwkN')
    .set('Accept', 'application/json');

    return this.http.get<any>(this.url, { headers: headers })
    .pipe(catchError(error => throwError('something went wrong')) );
  }

}

