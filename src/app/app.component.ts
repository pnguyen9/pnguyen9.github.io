import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BorderedBlueBlockType } from './BorderedBlueBlock/BorderedBlueBlock.component';
import { PopupComponent } from './Popup/Popup.component';
import { PopupDirective } from './Popup/Popup.directive';
import { Locale, ResourcesService } from './resources.service';

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

export class AppComponent implements OnInit {

    private static DEFAULT_TITLE: string = 'Pascal Nguyen';

    @ViewChild(PopupDirective) appPopup: PopupDirective;

    public borderedBlueBlockType = BorderedBlueBlockType;

    private popupComponentFactory: ComponentFactory<PopupComponent>;
    private popupViewContainerRef: ViewContainerRef;
    private localeSelectionPopupComponentRef: ComponentRef<PopupComponent>;

    private isLocaleSelectionPopupShown: boolean;

    public selectableListOptions: {
        label: string,
        callback: () => void,
    }[];

    private selectableLocaleOptions: {
        label: string,
        callback: () => void,
    }[];

    // TODO: Change resourcesServices visibility back to private once not needed anymore in app.component.html
    public constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        public resourcesService: ResourcesService,
        private titleService: Title,
    ) {
        titleService.setTitle(AppComponent.DEFAULT_TITLE);
    }

    public ngOnInit(): void {
        this.loadComponents();
    }

    private loadComponents(): void {
        this.loadPopupFactory();
        this.loadMenu();
        this.loadLocaleSelectionPopup();
    }

    private loadPopupFactory(): void {
        this.popupComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);

        this.popupViewContainerRef = this.appPopup.viewContainerRef;
        this.popupViewContainerRef.clear();
    }

    private loadMenu(): void {
        this.selectableListOptions = [];
        for (const item of this.menuItemKeys()) {
            this.selectableListOptions.push({
                label: MenuItem[item],
                callback: () => {
                    switch (MenuItem[item]) {
                        case MenuItem.Change_Language:
                            if (!this.isLocaleSelectionPopupShown) {
                                this.openLocaleSelectionPopup();
                            }
                            break;
                        default:
                            const popupComponentRef: ComponentRef<PopupComponent> =
                                this.popupViewContainerRef.createComponent(this.popupComponentFactory);
                            popupComponentRef.instance.initOkPopup('label.featureNotImplementedYet', () => {
                                popupComponentRef.destroy();
                            });
                    }
                }
            });
        }
    }

    private loadLocaleSelectionPopup(): void {
        this.isLocaleSelectionPopupShown = false;
        this.selectableLocaleOptions = [];
        for (const locale of this.resourcesService.localesKeys()) {
            this.selectableLocaleOptions.push({
                label: Locale[locale],
                callback: () => {
                    this.isLocaleSelectionPopupShown = false;
                    this.resourcesService.setLocale(Locale[locale]);
                    this.localeSelectionPopupComponentRef.destroy();
                }
            });
        }
    }

    private openLocaleSelectionPopup(): void {
        this.isLocaleSelectionPopupShown = true;
        this.localeSelectionPopupComponentRef = this.popupViewContainerRef.createComponent(this.popupComponentFactory);
        this.localeSelectionPopupComponentRef.instance.initSelectableListOptions(this.selectableLocaleOptions);
    }

    public menuItemKeys(): string[] {
        return Object.keys(MenuItem);
    }
}
