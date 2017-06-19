import {NgModule} from '@angular/core';
import {CapitalizePipe} from './capitalize.pipe';
import {BoldizePipe} from "./boldize.pipe";
import {HighlightDirective} from "./highlight.directive";
import {ColorDirective} from "./color.directive";

@NgModule({
  declarations: [CapitalizePipe, BoldizePipe, HighlightDirective, ColorDirective],
  exports: [CapitalizePipe, BoldizePipe, HighlightDirective, ColorDirective]
})
export class UtilsModule {
}
