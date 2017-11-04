"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var add_item_component_1 = require("./modules/tweets/angular/components/add-item/add-item.component");
var radio_component_1 = require("./modules/tweets/angular/components/radio/radio.component");
var static_1 = require("@angular/upgrade/static");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule(upgrade) {
        this.upgrade = upgrade;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                add_item_component_1.AddItemComponent,
                radio_component_1.RadioComponent
            ],
            entryComponents: [
                add_item_component_1.AddItemComponent,
                radio_component_1.RadioComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                static_1.UpgradeModule,
                forms_1.FormsModule
            ]
        }),
        __metadata("design:paramtypes", [static_1.UpgradeModule])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map