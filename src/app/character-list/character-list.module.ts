import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UtilsModule} from '../shared/utils/utils.module';

import {CharacterListComponent} from './character-list.component';
import {FormsModule} from '@angular/forms';
import {MdCheckboxModule, MdGridListModule} from "@angular/material";
import {CharacterService} from "./character.service";

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
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterListModule {
}
