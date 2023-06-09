import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';



@NgModule({
  declarations: [
    DbzPageComponent,
    ListComponent,
    AddCharactersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DbzPageComponent,
  ]
})
export class DbzModule { }
