import {CharacterModel} from "./characters.module";

export interface Response {
  characters: {
    results: CharacterModel[]
  }
}
