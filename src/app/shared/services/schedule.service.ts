import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISchedule, IResponse } from '../intefaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private url = 'https://europe-west3-project-277412.cloudfunctions.net/function-1';
  constructor( private http: HttpClient) {  }

  public getSchedule(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }
}
