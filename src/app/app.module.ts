import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderedBlueBlockComponent } from './BorderedBlueBlock/BorderedBlueBlock.component';
import { ListComponent } from './List/List.component';
import { ListItemComponent } from './List/ListItem/ListItem.component';
import { PopupComponent } from './Popup/Popup.component';
import { PopupDirective } from './Popup/Popup.directive';

@NgModule({
    entryComponents: [
        PopupComponent,
    ],
    declarations: [
        AppComponent,
        BorderedBlueBlockComponent,
        ListComponent,
        ListItemComponent,
        PopupComponent,
        PopupDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
