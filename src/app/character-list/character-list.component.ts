import {Component, OnInit} from '@angular/core';
import {CharacterDetail} from './character-detail';
import {isUndefined} from 'util';
import {Character} from "./character";

import {CharacterService} from "./character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
  myCharacters: Character[];
  myCharactersDetails: CharacterDetail[];

  characterSelector: number;
  selectedCharacter: CharacterDetail;

  characterTitle = 'dettagli personaggio';
  filterTitle = 'filtri';

  nameString = 'name';
  surnameString = 'surname';
  addressString = 'address';
  mobileBrandString = 'mobileBrand';
  mobilePriceString = 'mobilePrice';
  statusString = 'status';

  filters = [
    {
      fieldName: this.nameString,
      checked: true,
      highlighted: false,
      currencyPipe: false
    },
    {
      fieldName: this.surnameString,
      checked: true,
      highlighted: true,
      currencyPipe: false
    },
    {
      fieldName: this.addressString,
      checked: true,
      highlighted: false,
      currencyPipe: false
    },
    {
      fieldName: this.mobileBrandString,
      checked: true,
      highlighted: false,
      currencyPipe: false
    },
    {
      fieldName: this.mobilePriceString,
      checked: true,
      highlighted: false,
      currencyPipe: true
    },
    {
      fieldName: this.statusString,
      checked: true,
      highlighted: false,
      currencyPipe: false
    },
  ];

  constructor(private characterService: CharacterService) {
  }

  characterSelected(val: number) {
    val = Number(val);

    const selectedCharacterDetailsObj: CharacterDetail = this.myCharactersDetails.filter(function (item) {
      if (item.characterId === val) {
        return item;
      }
    })[0];

    if (isUndefined(selectedCharacterDetailsObj)) {
      this.selectedCharacter = null;
      console.log('undefined');
    } else {
      this.selectedCharacter = selectedCharacterDetailsObj;
      console.log('selected character --> ' + JSON.stringify(this.selectedCharacter));
    }
  }

  findIfFilterIsChecked(val) {
    return this.filters.filter(function (item) {
      return item.fieldName === val && item.checked;
    })[0];
  }

  ngOnInit() {
    this.myCharacters = this.characterService.getCharacters();
    this.myCharactersDetails = this.characterService.getCharactersDetails();
  }
}
