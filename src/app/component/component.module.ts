import {NgModule} from '@angular/core';
import {ContentModule} from './content/content.module';


@NgModule({
  imports: [
    ContentModule
  ],
  exports: [
    ContentModule
  ]
})
export class ComponentModule {
}
