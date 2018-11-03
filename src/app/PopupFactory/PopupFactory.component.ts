import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { PopupComponent } from '../Popup/Popup.component';
import { PopupDirective } from '../Popup/Popup.directive';

@Component({
    selector: 'app-popup-factory',
    templateUrl: './PopupFactory.component.html',
    styleUrls: ['./PopupFactory.component.css']
})

export class PopupFactoryComponent implements OnInit {

    @ViewChild(PopupDirective) appPopup: PopupDirective;

    private popupComponentFactory: ComponentFactory<PopupComponent>;
    private popupViewContainerRef: ViewContainerRef;

    public constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public ngOnInit() {
        this.loadPopupFactory();
    }

    private loadPopupFactory(): void {
        this.popupComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);

        this.popupViewContainerRef = this.appPopup.viewContainerRef;
        this.popupViewContainerRef.clear();
    }

    public createOkPopup(label: string, callback?: () => void) {
        const popupComponentRef: ComponentRef<PopupComponent> = this.popupViewContainerRef.createComponent(this.popupComponentFactory);
        popupComponentRef.instance.initOkPopup(label, () => {
            if (callback) {
                callback();
            }

            popupComponentRef.destroy();
        });
    }

    public createSelectableListOptionPopup(selectableListOptions: {
        label: string,
        callback?: () => void
    }[]) {
        const popupComponentRef: ComponentRef<PopupComponent> = this.popupViewContainerRef.createComponent(this.popupComponentFactory);

        const selectableListOptionsWithCallback: {
            label: string,
            callback: () => void
        }[] = [];

        for (const selectableListOption of selectableListOptions) {
            selectableListOptionsWithCallback.push({
                label: selectableListOption.label,
                callback: () => {
                    if (selectableListOption.callback) {
                        selectableListOption.callback();
                    }

                    popupComponentRef.destroy();
                }
            });
        }

        popupComponentRef.instance.initSelectableListOptions(selectableListOptionsWithCallback);
    }
}
