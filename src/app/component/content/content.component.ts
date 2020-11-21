import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../../core/service/gitHub.service';
import {Models} from '../../core/interfaces/interfaces';
import {LocalStorageService} from '../../core/service/local-storage.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  public gitHub: Models.GitHub[];
  public selectRepository: Models.GitHub[];
  constructor(private gitHubService: GitHubService,
              private localStorageService: LocalStorageService){}
  ngOnInit(): void {
  }

  onUserNameValue(name: string): void {
    this.gitHubService.getUserGitHub(name).subscribe((response: Models.GitHub[]) => {
      this.gitHub = response;
      this.localStorageService.setLocalStorageParamNickName(name);
      this.selectRepository = this.clearSelectRepository(this.gitHub);
    });
  }

  onList(listRepo: Models.GitHub[]): void{
    this.selectRepository = listRepo;
    this.localStorageService.setLocalStorageSelectRepository(listRepo);
  }

  private clearSelectRepository(response: Models.GitHub[]): Models.GitHub[] {
    if (!response.length) {
      return [];
    }
  }
}
