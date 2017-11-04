import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddItemComponent } from './modules/tweets/angular/components/add-item/add-item.component';
import { RadioComponent } from './modules/tweets/angular/components/radio/radio.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddItemComponent,
        RadioComponent
    ],
    entryComponents: [
        AddItemComponent,
        RadioComponent
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
