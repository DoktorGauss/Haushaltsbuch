import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardPipe'
})
export class CardPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
