import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SelectDropdownComponent} from './select-dropdown.component';
import {OutsideDirectiveModule} from '../../core/shared/outside/outside-directive.module';


@NgModule({
  imports: [
    CommonModule,
    OutsideDirectiveModule
  ],
  declarations: [
    SelectDropdownComponent
  ],
  exports: [
    SelectDropdownComponent
  ]
})
export class SelectDropdownModule {}
