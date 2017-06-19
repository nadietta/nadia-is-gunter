import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UtilsModule} from '../shared/utils/utils.module';

import {CustomListComponent} from './custom-list.component';


@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [
    CustomListComponent
  ],
  exports: [
    CustomListComponent
  ]
})
export class CustomListModule {
}
