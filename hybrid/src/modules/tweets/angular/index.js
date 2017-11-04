"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var main_component_1 = require("./components/main/main.component");
var options_component_1 = require("./components/options/options.component");
var options_model_1 = require("./model/options-model");
angular.module("app.ng1", [])
    .service("OptionsModel", options_model_1.OptionsModel)
    .component("main", new main_component_1.MainComponent())
    .component("options", new options_component_1.OptionsComponent());
//# sourceMappingURL=index.js.map