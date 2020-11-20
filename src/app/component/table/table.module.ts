import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableComponent} from './table.component';
import {SelectDropdownModule} from '../select-dropdown/select-dropdown.module';


@NgModule({
  imports: [
    CommonModule,
    SelectDropdownModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {}
