function Machine() {
    this.power = arguments[0];
    this.enabled = false;
}

Machine.prototype.enable = function () {
    this.enabled = true;
}
Machine.prototype.disable = function () {
    this.enabled = false;
}


function Fridge() {
    Machine.apply(this, arguments)
    this._food = [];
}

Fridge.prototype = Object.create(Machine.prototype);
Fridge.prototype.constructor = Fridge;

Fridge.prototype.addFood = function () {
    for (var i = 0; i < arguments.length; i++) {
        if ((this.power / 100 > this._food.length) && (this.enabled == true)) {
            this._food.push(arguments[i]);
        }
    }
}
Fridge.prototype.getFood = function () {
    return this._food.slice();
}


var fridge = new Fridge(700);
fridge.enable();
fridge.addFood("apple", "orange", "pinapple", "pear");
fridge.disable();
fridge.addFood("strawberry");
fridge.enable();
fridge.addFood("blackberry");

var fridgeFood = fridge.getFood();
fridgeFood.push("wrong");
fridge.addFood("carrot", "banana", "watermelon");

alert(fridge.getFood());