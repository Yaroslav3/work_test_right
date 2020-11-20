import {Pipe, PipeTransform} from '@angular/core';
import {Models} from '../../../interfaces/interfaces';

@Pipe({
  name: 'filerName'
})
export class FilerNamePipe implements PipeTransform {

  transform(items: Array<Models.GitHub>, searchQuery: string = ''): any {
    if (searchQuery === '' || searchQuery === 'All') {
      return items;
    }
    return items.filter(item => {
      if (item.language !== null) {
        return (
          item.language.indexOf(searchQuery) !== -1);
      }
    });
  }
}
