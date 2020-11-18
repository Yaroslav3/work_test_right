import {NgModule} from '@angular/core';
import {SearchInputModule} from './search-input/search-input.module';


@NgModule({
  imports: [
    SearchInputModule
  ],
  exports: [
    SearchInputModule
  ]
})
export class ComponentModule {
}
