import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: "trunks",
    power: 10
  }];

  @Output()
  public OnDeleteCharacter: EventEmitter<number> = new EventEmitter();


  public onDeleteCharacter(index: number): void {
    if(index < 0) return;
    this.OnDeleteCharacter.emit(index);
  }
}
