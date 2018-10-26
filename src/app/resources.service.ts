import { Injectable } from '@angular/core';

import * as Resources from '../assets/resources/ResourcesBundle.json';
import * as Resources_fr from '../assets/resources/ResourcesBundle_fr.json';

export enum Locale {
    EN,
    FR,
}

@Injectable({
    providedIn: 'root'
})

export class ResourcesService {

    private static DEFAULT_LOCALE: Locale = Locale.EN;

    private currentLocale: Locale;

    constructor() {
        this.setLocale(ResourcesService.DEFAULT_LOCALE);
    }

    // TODO: Delete this method once language selection has been properly implemented
    public toggleLocale(): void {
        if (this.currentLocale === Locale.FR) {
            this.currentLocale = Locale.EN;
        } else {
            this.currentLocale = Locale.FR;
        }
    }

    public setLocale(locale: Locale): void {
        this.currentLocale = locale;
    }

    public getString(label: string): string {
        let resource: string;

        switch (this.currentLocale) {
            case Locale.FR:
                resource = Resources_fr[label];
                break;
            case Locale.EN:
            default:
                resource = Resources[label];
        }

        return resource;
    }
}
