import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/characters/add-characters/add-characters.component';



@NgModule({
  declarations: [
    DbzPageComponent,
    ListComponent,
    AddCharactersComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzPageComponent,
  ]
})
export class DbzModule { }
