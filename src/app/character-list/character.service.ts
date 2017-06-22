import {Injectable} from "@angular/core";
import {Character} from "./character";
import {CHARACTERS} from "./mock-characters";
import {CharacterDetail} from "./character-detail";
import {CHARACTERS_DETAILS} from "./mock-characters-details";

@Injectable()
export class CharacterService {

  public getCharacters(): Promise<Character[]> {
    return new Promise(
      resolve => {
        setTimeout(() => resolve(CHARACTERS), 2000);
      }
    )
  }

  public static getCharactersDetails(): Promise<CharacterDetail[]> {
    return Promise.resolve(CHARACTERS_DETAILS)
  }

  public getCharactersDetailsSlowly(): Promise<CharacterDetail[]> {
    return new Promise(
      resolve => {
        setTimeout(() => resolve(CHARACTERS_DETAILS), 5000);
      }
    )
  }
}
