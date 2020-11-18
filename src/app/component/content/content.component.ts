import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../../core/service/gitHub.service';
import {Models} from '../../core/interfaces/interfaces';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  public gitHub: Models.GitHub[];
  constructor(private gitHubService: GitHubService){}
  ngOnInit(): void {
  }

  onUserNameValue(name: string): void {
    this.gitHubService.getUserGitHub(name).subscribe((response: Models.GitHub[]) => {
      this.gitHub = response;
    });
  }
}
