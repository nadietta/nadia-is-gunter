import {RouterModule, Routes} from "@angular/router";
import {CustomListComponent} from "./custom-list/custom-list.component";
import {NgModule} from "@angular/core";
import {CharacterListComponent} from "./character-list/character-list.component";
import {RolesComponent} from "./roles/roles.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: CustomListComponent
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
