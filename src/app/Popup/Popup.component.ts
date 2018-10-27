import { Component } from '@angular/core';

import { ResourcesService } from '../resources.service';

@Component({
    selector: 'app-popup',
    templateUrl: './Popup.component.html',
    styleUrls: ['./Popup.component.css']
})

export class PopupComponent {

    public bodyLabel: string;

    public okButtonVisibility: string = '';

    public selectableListOptions: {
        label: string,
        callback: () => void,
    }[] = [];

    private okCallback: () => void;

    constructor(public resourcesService: ResourcesService) {
    }

    public initSelectableListOptions(selectableListOptions: {
        label: string,
        callback: () => void
    }[]) {
        this.bodyLabel = 'label.selectOption';
        this.selectableListOptions = selectableListOptions;
    }

    public initOkPopup(label: string, callback: () => void): void {
        this.bodyLabel = label;
        this.okButtonVisibility = 'visible';
        this.okCallback = callback;
    }

    public ok() {
        this.okCallback();
    }

}
