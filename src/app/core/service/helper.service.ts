import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Models} from '../interfaces/interfaces';


@Injectable()
export class HelperService {
  constructor() {
  }

  public getConvertedTimeFileUpload(date: string): Models.DataFormat {
    const buffDate = moment(date);
    return {
      time_str: buffDate.format('hh:mm A'),
      date_str: buffDate.format('DD.MM.YY')
    };
  }

  public findDuplicates(mas: any[]): any[] {
    let result = mas;
    const obj = {};
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== null) {
        obj[result[i]] = result[i];
      }
    }
    result = [];
    for (const key in obj) {
      result.push(obj[key]);
    }
    return result;
  }

  public getLanguage(gitHub: Models.GitHub[]): any[] {
    const value = [];
    gitHub.forEach(git => {
      value.push(git.language);
    });
    return this.findDuplicates(value);
  }

}
