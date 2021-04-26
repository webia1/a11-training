import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dennis',
})
export class DennisPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    console.log('ARGS: ', args[0]);
    return value + args[0] + '  -- Grüße vom Dennis';
  }
}
