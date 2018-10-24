import { Component, OnInit, Input } from '@angular/core';

export enum BorderedBlueBlockType {
    MiddleBlock = 'middle-block',
    RightBlock = 'right-block',
}

@Component({
    selector: 'app-bordered-blue-block',
    templateUrl: './BorderedBlueBlock.component.html',
    styleUrls: ['./BorderedBlueBlock.component.css']
})

export class BorderedBlueBlockComponent implements OnInit {

    @Input() blockPosition: BorderedBlueBlockType;

    constructor() {
    }

    ngOnInit(): void {
    }

}
