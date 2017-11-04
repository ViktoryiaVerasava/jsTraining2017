"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills.ts");
require("./modules/tweets/angular/index");
var angular = require("angular");
var static_1 = require("@angular/upgrade/static");
var add_item_component_1 = require("./modules/tweets/angular/components/add-item/add-item.component");
var radio_component_1 = require("./modules/tweets/angular/components/radio/radio.component");
angular.module("app", ["app.ng1", "ng2"]);
angular.module("ng2", [])
    .directive('addItem', static_1.downgradeComponent({ component: add_item_component_1.AddItemComponent }))
    .directive('radio', static_1.downgradeComponent({ component: radio_component_1.RadioComponent }));
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=index.js.map