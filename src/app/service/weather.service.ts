import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // http://api.openweathermap.org/data/2.5/weather?q=warszawa&appid=dff374d5b86373a365b46793e20f9c5c
  public actualWeatherData = null;
  constructor(
    private http: HttpClient
  ) {
  }
  public getWeatherByCityName(cityName: string): any {
    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', '79dfba82d265341aed048c40c894cb0e');
    return this.http.get('http://api.openweathermap.org/data/2.5/weather', {params});
  }
}

// moj klucz z apki openweather, do sprawdzenia
// 79dfba82d265341aed048c40c894cb0e
