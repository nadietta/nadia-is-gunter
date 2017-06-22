import {Component, OnInit} from "@angular/core";
import {Role} from "./role";

import {RolesService} from "./roles.service";
import {isUndefined} from "util";

import {Log} from 'ng2-logger';

const log = Log.create('RolesComponent');

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {
  title = 'ruoli';
  fetchedRoles: Role[];

  roleSelector: number;
  roleSelected: Role;
  rolesSelected: Role[];

  constructor(private rolesService: RolesService) {
    log.data('siamo nel constrcutor');
  }

  getRoles(): void {
    this.rolesService.fetchRoles().then(
      roles => this.fetchedRoles = roles
    ).catch((e) => {
      console.error('Error fetching roles', e);
    })
  }

  selectRole(val: number): void {
    val = Number(val);

    this.roleSelected = null;

    if (val) {
      const selectedRoleObj: Role = this.fetchedRoles.filter(
        function (item) {
          if (item.id === val) {
            return item;
          }
        }
      )[0];

      if (isUndefined(selectedRoleObj)) {
        log.warn('undefined');
      } else {
        this.roleSelected = selectedRoleObj;
      }
    }
  }

  sortRolesByRoleName(): void {
    let sortedRoles: Role[];

    sortedRoles = this.rolesSelected.sort((n1, n2) => {
      if (n1.role > n2.role) {
        return 1;
      }

      if (n1.role < n2.role) {
        return -1;
      }

      return 0;
    });

    this.rolesSelected = sortedRoles;
  }

  addRole(role: Role): void {
    if (role) {
      if (this.rolesSelected.indexOf(role) === -1) {
        this.rolesSelected.push(role);
        this.sortRolesByRoleName();
      }
    }
  }

  clearRoles(): void {
    this.rolesSelected = [];
  }

  findRoles(): void {
    log.info(JSON.stringify(this.rolesSelected));
  }

  ngOnInit(): void {
    let test = {'id': 12};
    log.info('CIAO SONO NADIA', JSON.stringify(test));
    this.getRoles();
    this.rolesSelected = [];
  }

}
