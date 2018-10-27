import { Component, OnInit, Input } from '@angular/core';

export enum BorderedBlueBlockType {
    MiddleBlock = 'middle-block',
    RightBlock = 'right-block',
    Free = ''
}

@Component({
    selector: 'app-bordered-blue-block',
    templateUrl: './BorderedBlueBlock.component.html',
    styleUrls: ['./BorderedBlueBlock.component.css']
})

export class BorderedBlueBlockComponent {

    @Input() blockPosition: BorderedBlueBlockType = BorderedBlueBlockType.Free;

    constructor() {
    }

}
