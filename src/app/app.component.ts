import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BorderedBlueBlockType } from './BorderedBlueBlock/BorderedBlueBlock.component';
import { PopupDirective } from './Popup/Popup.directive';
import { ResourcesService } from './resources.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private static DEFAULT_TITLE: string = 'Pascal Nguyen';

    @ViewChild(PopupDirective) appPopup: PopupDirective;

    public borderedBlueBlockType = BorderedBlueBlockType;

    public selectableListOptions: {
        label: string,
        callback: () => void,
    }[];

    // TODO: Change resourcesServices visibility back to private once not needed anymore in app.component.html
    public constructor(
        public resourcesService: ResourcesService,
        private titleService: Title,
    ) {
        titleService.setTitle(AppComponent.DEFAULT_TITLE);
    }

    public ngOnInit(): void {
    }
}
