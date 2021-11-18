import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListchampPageComponent } from './listchamplol/pages/listchamp-page/listchamp-page.component';
import { DisplayListchampComponent } from './listchamplol/components/display-listchamp/display-listchamp.component';
import { AddChampComponent } from './listchamplol/layouts/add-champ/add-champ.component';


@NgModule({
  declarations: [
    AppComponent,
    ListchampPageComponent,
    DisplayListchampComponent,
    AddChampComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
