import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BorderedBlueBlockType } from './BorderedBlueBlock/BorderedBlueBlock.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    private static DEFAULT_TITLE: string = 'Pascal Nguyen';

    public borderedBlueBlockType = BorderedBlueBlockType;

    public constructor(private titleService: Title ) {
        titleService.setTitle(AppComponent.DEFAULT_TITLE);
    }

}
