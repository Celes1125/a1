import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar'
})
export class ConcatenarPipe implements PipeTransform {

  transform(value: unknown, ...args: string[]): unknown {
    
    if ( args[0]) {
      return value + args[0];

    }
    return value+ ">>>>>>>>>>>>>>>>>>>>>>>>HOLAMUNDO";
  }

}
