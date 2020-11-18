import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GitHubService} from './service/gitHub.service';
import {SystemService} from './service/system.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    GitHubService,
    SystemService,
  ]
})export class CoreModule {}
