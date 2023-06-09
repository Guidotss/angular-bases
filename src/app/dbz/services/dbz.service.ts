import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];


  public onNewCharacter( character:Character ): void {
    console.log('main page');
    this.characters = [...this.characters, character]
  }

  public OnDeleteCharacter( index: number ): void {
    console.log('main page');
    this.characters = this.characters.filter( (character, i) => i !== index );
  }

}
