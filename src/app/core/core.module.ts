import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GitHubService} from './service/gitHub.service';
import {SystemService} from './service/system.service';
import {HttpClientModule} from '@angular/common/http';
import {BasicService} from './service/basic.service';
import {HelperService} from './service/helper.service';
import {LocalStorageService} from './service/local-storage.service';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    GitHubService,
    SystemService,
    BasicService,
    HelperService,
    LocalStorageService
  ]
})export class CoreModule {}
