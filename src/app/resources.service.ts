import { Injectable } from '@angular/core';

import Resources from '../assets/resources/ResourcesBundle.json';
import Resources_fr from '../assets/resources/ResourcesBundle_fr.json';

export enum Locale {
    EN = 'label.language.english',
    FR = 'label.language.french',
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

    public localesKeys(): string[] {
        return Object.keys(Locale);
    }
}
