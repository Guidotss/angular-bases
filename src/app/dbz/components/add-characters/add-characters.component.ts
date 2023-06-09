import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    console.log(this.newCharacter);

    if(this.newCharacter.name.length === 0) return;

    this.onNewCharacter.emit({...this.newCharacter});

    this.newCharacter.name = '';
    this.newCharacter.power = 0;
  }
}
