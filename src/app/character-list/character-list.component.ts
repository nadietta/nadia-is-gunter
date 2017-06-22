import {Component, OnInit} from '@angular/core';
import {CharacterDetail} from './character-detail';
import {isUndefined} from 'util';
import {Character} from "./character";

import {CharacterService} from "./character.service";

import {Log} from 'ng2-logger';

const log = Log.create('CharacterListComponent');

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

    this.selectedCharacter = null;

    if (val && this.myCharactersDetails) {
      const selectedCharacterDetailsObj: CharacterDetail = this.myCharactersDetails.filter(function (item) {
        if (item.characterId === val) {
          return item;
        }
      })[0];

      if (isUndefined(selectedCharacterDetailsObj)) {
        log.warn('undefined');
      } else {
        this.selectedCharacter = selectedCharacterDetailsObj;
        log.info('selected character --> ', JSON.stringify(this.selectedCharacter));
      }
    }
  }

  findIfFilterIsChecked(val) {
    return this.filters.filter(function (item) {
      return item.fieldName === val && item.checked;
    })[0];
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .then(characters => this.myCharacters = characters)
      .catch((e) => {
        log.error('Error fetching characters', e);
      })
  }

  getCharactersDetails(): void {
    CharacterService.getCharactersDetails()
      .then(charactersDetails => this.myCharactersDetails = charactersDetails)
      .catch((e) => {
        log.error('Error fetching characters details', e);
      });
  }

  getCharactersDetailsSlowly(): void {
    this.characterService.getCharactersDetailsSlowly()
      .then(charactersDetails => this.myCharactersDetails = charactersDetails)
      .catch((e) => {
        log.error('Error fetching characters details slowly', e);
      });
  }

  ngOnInit(): void {
    this.getCharacters();
    //this.getCharactersDetails();
    this.getCharactersDetailsSlowly();
  }
}
