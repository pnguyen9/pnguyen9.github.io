import { Component, Input } from '@angular/core';

import { ResourcesService } from '../resources.service';

@Component({
    selector: 'app-list',
    templateUrl: './List.component.html',
    styleUrls: ['./List.component.css']
})

export class ListComponent {

    @Input() selectableListOptions: {
        label: string,
        callback: () => void,
    }[] = [];

    constructor(public resourcesService: ResourcesService) {
    }

    public addSelectableListOption(label: string, callback: () => void) {
        this.selectableListOptions.push({ label, callback });
    }

    public initSelectableListOptions(selectableListOptions: {
        label: string,
        callback: () => void
    }[]) {
        this.selectableListOptions = selectableListOptions;
    }

}
