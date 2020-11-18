import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {SearchInputModule} from '../search-input/search-input.module';
import {TableModule} from '../table/table.module';


@NgModule({
  imports: [
    CommonModule,
    SearchInputModule,
    TableModule
  ],
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {}
