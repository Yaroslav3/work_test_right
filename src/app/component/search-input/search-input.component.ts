import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../../core/service/gitHub.service';
import {Models} from '../../core/interfaces/interfaces';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {
  constructor(private gitHubService: GitHubService) {
  }

  ngOnInit(): void {
    this.gitHubService.getUserGitHub('Yaroslav3').subscribe((response: Models.GitHub) => {
      console.log(response);
    });
  }
}
