import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { FlightSchedule } from './flight-schedule';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';


@Injectable({
  providedIn: 'root'
})
export class LufthansaDataService {

  url = 'https://lihcode-lufthansa-open-new-v1.p.mashape.com/v1/operations/schedules/';

  constructor(private http: HttpClient) { }

  getInformation(flightSchedule: FlightSchedule): Observable<any> {

    const headers = new HttpHeaders()
    .set('X-Mashape-Key', '0JLBKYq2OjmshWNxEkzneQpvnkTFp1AMEpRjsngMVWjwR3kwkN')
    .set('Accept', 'application/json');

   // console.log (new Date('flightSchedule.date'));

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(this.url + flightSchedule.origin + '/' + flightSchedule.destination + '/' + flightSchedule.date + '?limit=' + flightSchedule.limit, { headers: headers })
    .pipe(catchError(error => throwError('something went wrong')) );
  }

}

