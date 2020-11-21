import {Injectable} from '@angular/core';
import {Models} from '../interfaces/interfaces';


@Injectable()
export class LocalStorageService {
  private nameNick = 'nick_name_user';
  private activeRepoID = 'active_repository';
  constructor() {
  }

  public setLocalStorageSelectRepository(repository: Models.GitHub[]): void {
    const id = [];
    localStorage.setItem(this.activeRepoID, id.toString());
    repository.forEach((repo: Models.GitHub) => {
      if (repo.active === true) {
        id.push(repo.id);
      }
    });
    localStorage.setItem(this.activeRepoID, id.toString());
  }

  public getLocalStorageSelectRepository(repository: Models.GitHub[]): Models.GitHub[] {
    const selectRepo: Models.GitHub[] = [];
    let id = [];
    if (localStorage.getItem(this.activeRepoID)) {
      id = localStorage.getItem(this.activeRepoID).split(',');
    }
    if (id.length) {
      id.forEach(elem => {
        if (repository.filter(x => x.id === +elem)) {
          selectRepo.push(repository.filter(x => x.id === +elem)[0]);
        }
      });
    }
    return selectRepo;
  }

  public setLocalStorageParamNickName(name: string): void{
    localStorage.setItem(this.nameNick, name);
  }

  public getLocalStorageParamNickName(): string {
    return localStorage.getItem(this.nameNick);
  }
}
