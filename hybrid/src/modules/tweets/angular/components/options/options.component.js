"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var options_controller_1 = require("./options.controller");
var OptionsComponent = (function () {
    function OptionsComponent() {
        this.controller = options_controller_1.OptionsController;
        this.template = require('./options.tpl.html');
        this.bindings = {
            onSelect: '&',
            selected: '<'
        };
    }
    return OptionsComponent;
}());
exports.OptionsComponent = OptionsComponent;
//# sourceMappingURL=options.component.js.map