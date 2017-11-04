"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = (function () {
    function MainController() {
    }
    MainController.prototype.onAdd = function (item) {
        alert("Added item: " + item.name);
    };
    MainController.prototype.onSelect = function (option) {
        alert("Selected option: " + option.option);
    };
    return MainController;
}());
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map