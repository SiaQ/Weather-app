import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public actualWeatherData = null;
  constructor(
    private http: HttpClient
  ) {
  }
  public getWeatherByCityName(cityName: string): any {
    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', '79dfba82d265341aed048c40c894cb0e');
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {params});
  }
}
