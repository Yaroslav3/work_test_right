
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilerNamePipe} from './filter-name-pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FilerNamePipe
  ],
  exports: [
    FilerNamePipe
  ]
})
export class FilerNamePipeModule { }
