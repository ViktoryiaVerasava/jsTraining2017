function Machine() {
    this.power = arguments[0];

    this.enabled = false;
    this.enable = function () {
        this.enabled = true;
    }
    this.disable = function () {
        this.enabled = false;
    }
}

function Fridge() {
    Machine.apply(this, arguments);

    var food = [];
    this.addFood = function () {
        for (var i = 0; i < arguments.length; i++) {
            if ((this.power / 100 > food.length) && (this.enabled == true)) {
                food.push(arguments[i]);
            }
        }
    }
    this.getFood = function () {
        return food.slice();
    }
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