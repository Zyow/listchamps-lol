import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListchampPageComponent } from './pages/listchamp-page/listchamp-page.component';
import { DisplayListchampComponent } from './components/display-listchamp/display-listchamp.component';
import { AddChampComponent } from './layouts/add-champ/add-champ.component';

@NgModule({
  declarations: [
    ListchampPageComponent,
    DisplayListchampComponent,
    AddChampComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListchampPageComponent
  ]
})
export class ListchamplolModule { }
