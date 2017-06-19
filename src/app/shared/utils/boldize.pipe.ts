import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'boldize'})
export class BoldizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return `hello ${value.bold()}`;
    }
    return value;
  }
}
