import { Component, OnInit, ViewChild } from '@angular/core';

import { BorderedBlueBlockType } from '../BorderedBlueBlock/BorderedBlueBlock.component';
import { PopupFactoryComponent } from '../PopupFactory/PopupFactory.component';
import { Locale, ResourcesService } from '../resources.service';

export enum MenuItem {
    Summary = 'label.summary',
    Experience = 'label.experience',
    Education = 'label.education',
    Skills = 'label.skills',
    Change_Language = 'label.changeLanguage',
}

@Component({
    selector: 'app-menu',
    templateUrl: './Menu.component.html',
    styleUrls: ['./Menu.component.css']
})

export class MenuComponent implements OnInit {

    @ViewChild('popupFactory') popupFactory: PopupFactoryComponent;

    public borderedBlueBlockType = BorderedBlueBlockType;

    public selectableListOptions: {
        label: string,
        callback: () => void,
    }[] = [];

    private selectableLocaleOptions: {
        label: string,
        callback: () => void,
    }[];

    constructor(public resourcesService: ResourcesService) {
    }

    public ngOnInit() {
        this.loadLocaleSelectionPopup();
        this.loadMenu();
    }

    private loadMenu(): void {
        this.selectableListOptions = [];
        for (const item of this.menuItemKeys()) {
            this.selectableListOptions.push({
                label: MenuItem[item],
                callback: () => {
                    switch (MenuItem[item]) {
                        case MenuItem.Change_Language:
                            this.openLocaleSelectionPopup();
                            break;
                        default:
                            this.popupFactory.createOkPopup('label.featureNotImplementedYet');
                    }
                }
            });
        }
    }

    private loadLocaleSelectionPopup(): void {
        this.selectableLocaleOptions = [];
        for (const locale of this.resourcesService.localesKeys()) {
            this.selectableLocaleOptions.push({
                label: Locale[locale],
                callback: () => {
                    this.resourcesService.setLocale(Locale[locale]);
                }
            });
        }
    }

    private openLocaleSelectionPopup(): void {
        this.popupFactory.createSelectableListOptionPopup(this.selectableLocaleOptions);
    }

    public menuItemKeys(): string[] {
        return Object.keys(MenuItem);
    }

}
