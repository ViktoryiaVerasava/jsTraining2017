import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddItemComponent } from './modules/angular/components/add-item/add-item.component';
import { CityComponent } from './modules/angular/components/city/city.component';
import { CSSCarouselComponent } from './modules/angular/components/carousel/carousel.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddItemComponent,
        CityComponent,
        CSSCarouselComponent, 
    ],
    entryComponents: [
        AddItemComponent,
        CityComponent,
        CSSCarouselComponent, 
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    }
}
