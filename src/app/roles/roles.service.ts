import {Injectable} from "@angular/core";
import {Role} from "./role";
import {ROLES} from "./mock-roles";

@Injectable()
export class RolesService {

  public fetchRoles(): Promise<Role[]> {
    return new Promise(
      resolve => {
        setTimeout(() => resolve(ROLES), 2000);
      }
    )
  }
}
