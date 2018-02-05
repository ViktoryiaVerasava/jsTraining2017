import "./polyfills.ts";
import "./modules/angular/index";
import * as angular from "angular";

import { downgradeComponent } from '@angular/upgrade/static';
import { AddItemComponent } from "./modules/angular/components/add-item/add-item.component";
import { CityComponent } from "./modules/angular/components/city/city.component";
import { CSSCarouselComponent } from "./modules/angular/components/carousel/carousel.component";

angular.module("app", ["app.ng1", "ng2"]);
angular.module("ng2", [])
    .directive('addItem',
    downgradeComponent({ component: AddItemComponent }) as angular.IDirectiveFactory)
    .directive('city',
    downgradeComponent({ component: CityComponent }) as angular.IDirectiveFactory)
    .directive('cssCarousel',
    downgradeComponent({ component: CSSCarouselComponent }) as angular.IDirectiveFactory);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);