import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BorderedBlueBlockType } from './BorderedBlueBlock/BorderedBlueBlock.component';
import { ResourcesService } from './resources.service';

export enum MenuItem {
    Summary = 'label.summary',
    Experience = 'label.experience',
    Education = 'label.education',
    Skills = 'label.skills',
    Change_Language = 'label.changeLanguage',
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    private static DEFAULT_TITLE: string = 'Pascal Nguyen';

    public borderedBlueBlockType = BorderedBlueBlockType;
    public menuItem = MenuItem;

    // TODO: Delete once not needed anymore (e.g. when proper pages have been implemented)
    public selectedMenuItem: MenuItem = MenuItem[MenuItem.Summary];

    // TODO: Change resourcesServices visibility back to private once not needed anymore in app.component.html
    public constructor(private titleService: Title, public resourcesService: ResourcesService) {
        titleService.setTitle(AppComponent.DEFAULT_TITLE);
    }

    public onMenuItemClicked(value: MenuItem) {
        // TODO: Switch to different page when user is clicking a menu
        // Perhaps I should implement actual pages instead of just changing the content of the body
        switch (MenuItem[value]) {
            case MenuItem.Change_Language:
                // TODO: Implement a window so users can choose between the available locales
                this.resourcesService.toggleLocale();
                break;
        }

        this.selectedMenuItem = value;
    }

    public menuItemKeys(): string[] {
        return Object.keys(MenuItem);
    }
}
