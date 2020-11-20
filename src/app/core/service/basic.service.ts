import {Injectable} from '@angular/core';

@Injectable()
export class BasicService {

  constructor() {}

  public isDefined(value: any): boolean {
    return typeof value !== 'undefined';
  }
}
