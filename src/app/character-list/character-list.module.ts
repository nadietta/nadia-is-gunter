import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UtilsModule} from '../shared/utils/utils.module';

import {CharacterListComponent} from './character-list.component';
import {FormsModule} from '@angular/forms';
import {MdCheckboxModule, MdGridListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule,
    MdCheckboxModule,
    MdGridListModule
  ],
  declarations: [
    CharacterListComponent
  ],
  exports: [
    CharacterListComponent
  ]
})
export class CharacterListModule {
}
