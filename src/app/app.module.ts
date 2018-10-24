import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderedBlueBlockComponent } from './BorderedBlueBlock/BorderedBlueBlock.component';
import { ListItemComponent } from './ListItem/ListItem.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderedBlueBlockComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
