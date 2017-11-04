"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemModel = (function () {
    function ItemModel() {
    }
    Object.defineProperty(ItemModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemModel.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (category) {
            this._category = category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemModel.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (content) {
            this._content = content;
        },
        enumerable: true,
        configurable: true
    });
    return ItemModel;
}());
exports.ItemModel = ItemModel;
//# sourceMappingURL=item-model.js.map