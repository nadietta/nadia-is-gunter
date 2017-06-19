import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Router} from "@angular/router";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module"
import {CustomListModule} from './custom-list/custom-list.module';
import {CharacterListModule} from './character-list/character-list.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CustomListModule,
    CharacterListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
