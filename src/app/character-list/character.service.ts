import {Injectable} from "@angular/core";
import {Character} from "./character";
import {CHARACTERS} from "./mock-characters";
import {CharacterDetail} from "./character-detail";
import {CHARACTERS_DETAILS} from "./mock-characters-details";

@Injectable()
export class CharacterService {
  getCharacters(): Character[] {
    return CHARACTERS
  };

  getCharactersDetails(): CharacterDetail[] {
    return CHARACTERS_DETAILS
  }
}
