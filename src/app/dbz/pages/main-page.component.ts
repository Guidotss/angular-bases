import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzPageComponent {

  constructor(
    private dbzService:DbzService
  ){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public OnDeleteCharacter(id: number){
    this.dbzService.OnDeleteCharacter(id);
  }

  public onNewCharacter(character: Character){
    this.dbzService.onNewCharacter(character);
  }

}
