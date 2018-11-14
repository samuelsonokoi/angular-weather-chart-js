import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _httpC: HttpClient) { }

  dailyForcast(){
    return this._httpC.get("http://api.openweathermap.org/data/2.5/forecast?q=<Your location eg. London>,<country code eg. uk>&appid=<your-api-key>")
  }
}