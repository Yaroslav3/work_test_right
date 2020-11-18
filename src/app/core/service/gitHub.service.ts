import {Injectable} from '@angular/core';
import * as apiConstants from '../../core/api-constants';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SystemService} from './system.service';
import {Models} from '../interfaces/interfaces';

@Injectable()
export class GitHubService {
  constructor(private _HTTP: HttpClient,
              private _SYSTEM: SystemService) {
  }

  public getUserGitHub(nameUser: string): Observable<Models.GitHub[]>{
    return this._HTTP.get<Models.GitHub[]>(this._SYSTEM.getApi() + apiConstants.GITHUB + nameUser + '/repos');
  }
}
