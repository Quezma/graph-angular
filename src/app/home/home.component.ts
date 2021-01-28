import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CharacterModel} from '../models/characters.module';
import {Response} from '../models/responseCharacter.model';
import {GET_CHARACTERS} from '../services/character.graphql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Observable<CharacterModel[]> | undefined;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.synch();
  }

  synch(): void {
    this.characters = this.apollo.watchQuery<Response>({
      query: GET_CHARACTERS,
    }).valueChanges.pipe(
      map((result) => result.data.characters.results)
    );
  }

}
