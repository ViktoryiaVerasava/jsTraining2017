import "./polyfills.ts";
import "./modules/tweets/angular/index";
import * as angular from "angular";

import { downgradeComponent } from '@angular/upgrade/static';
import { AddItemComponent } from "./modules/tweets/angular/components/add-item/add-item.component";
import { RadioComponent } from "./modules/tweets/angular/components/radio/radio.component";

angular.module("app", ["app.ng1", "ng2"]);
angular.module("ng2", [])
    .directive('addItem',
    downgradeComponent({ component: AddItemComponent }) as angular.IDirectiveFactory)
    .directive('radio',
    downgradeComponent({ component: RadioComponent }) as angular.IDirectiveFactory);


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);