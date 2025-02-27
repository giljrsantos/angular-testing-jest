import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataPlaca',
  standalone: true
})
export class FormataPlacaPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.slice(0, 3) + '-' + value.slice(3);
  }

}
