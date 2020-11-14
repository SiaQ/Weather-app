import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value - 273.15).toFixed(2);
  }

}
