import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableComponent} from './table.component';
import {SelectDropdownModule} from '../select-dropdown/select-dropdown.module';
import {FilerNamePipeModule} from '../../core/shared/pipes/filter-name/filter-name.pipe';


@NgModule({
  imports: [
    CommonModule,
    SelectDropdownModule,
    FilerNamePipeModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {}
