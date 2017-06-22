import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UtilsModule} from "../shared/utils/utils.module";
import {FormsModule} from "@angular/forms";
import {RolesService} from "./roles.service";
import {RolesComponent} from "./roles.component";

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule
  ],
  declarations: [
    RolesComponent
  ],
  exports: [
    RolesComponent
  ],
  providers: [
    RolesService
  ]
})
export class RolesModule {
}
