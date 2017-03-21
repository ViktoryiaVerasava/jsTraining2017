
function makeBuffer() {
    var arr = [];

    return function () {
        if (arguments.length > 0) {
            arr.push(arguments[0]);
        } else return arr.join(" ");

    }
}

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);
alert(buffer());

var buffer2 = makeBuffer();
buffer2('Closures');
buffer2("must be");
buffer2("used");
alert(buffer2());