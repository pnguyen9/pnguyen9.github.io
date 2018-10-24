import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BorderedBlueBlockType, BorderedBlueBlockComponent } from './BorderedBlueBlock/BorderedBlueBlock.component';

export enum MenuItem {
    Summary = 'Summary',
    Experience = 'Experience',
    Education = 'Education',
    Skills = 'Skills',
    Change_Language = 'Change language',
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private static DEFAULT_TITLE: string = 'Pascal Nguyen';

    @Input() middleBlockBody: string;

    public borderedBlueBlockType = BorderedBlueBlockType;
    public menuItem = MenuItem;

    public constructor(private titleService: Title ) {
        titleService.setTitle(AppComponent.DEFAULT_TITLE);
    }

    public ngOnInit(): void {
        this.loadBodyBlock();
    }

    public loadBodyBlock(): void {
        this.middleBlockBody =
            `
                This is a sample of a Final Fantasy 7 stylised portfolio.
                The menu on the right isn't implemented yet. I will be implementing them in the order they're displayed.
            `;
    }

    public onMenuItemClicked(value: MenuItem) {
        // TODO
        switch (value) {
            default:
                this.middleBlockBody = `Clicked menu item: ${MenuItem[value]}`;
        }
    }

    public menuItemKeys(): string[] {
        return Object.keys(MenuItem);
    }
}
