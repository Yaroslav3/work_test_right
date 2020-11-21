import { NgModule } from '@angular/core';

import { OutsideDirective } from './outside.directive';

@NgModule({
  declarations: [
    OutsideDirective,
  ],
  exports: [
    OutsideDirective,
  ]
})
export class OutsideDirectiveModule {}
