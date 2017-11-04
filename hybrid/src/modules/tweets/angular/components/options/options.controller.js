"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsController = (function () {
    function OptionsController(optionsModel) {
        this.optionsModel = optionsModel;
    }
    OptionsController.prototype.handleSelect = function () {
        this.onSelect({ option: this.selected });
    };
    OptionsController.$inject = ["OptionsModel"];
    return OptionsController;
}());
exports.OptionsController = OptionsController;
//# sourceMappingURL=options.controller.js.map