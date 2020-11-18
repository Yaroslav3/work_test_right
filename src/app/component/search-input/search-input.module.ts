import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SearchInputComponent} from './search-input.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchInputComponent
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule {}
