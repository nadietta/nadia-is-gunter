import {Component, OnInit} from '@angular/core';
import {CHARACTERS} from './characters';
import {CHARACTERS_DETAILS} from './characters-details';
import {CharacterDetail} from './character-detail';
import {isUndefined} from 'util';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
  // myCharacters: any;
  // myCharactersDetails: any;
  myCharacters = CHARACTERS;
  myCharactersDetails = CHARACTERS_DETAILS;
  characterSelector: number;
  selectedCharacter: CharacterDetail;

  characterTitle = 'dettagli Pesonaggio';
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
      highlighted: true,
      currencyPipe: false
    },
    {
      fieldName: this.surnameString,
      checked: true,
      highlighted: false,
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

  // constructor(private nadiaService: NadiaService) {
  constructor() {
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
    // this.myCharactersDetails = this.nadiaService.fetch('characterDetails'); // returns a promise
    // this.myCharacters = this.nadiaService.fetch('character');
  }
}
