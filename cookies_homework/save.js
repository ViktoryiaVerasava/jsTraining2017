(function() {

    this.save = function save() {
        var action = document.querySelector(".input__text--all-width").value;
        var optionValue = document.querySelector(".input__number").value;
        var radioSubscribe = document.querySelector(".input__radio[value='subscribe']").checked;
        var checkWrap = document.querySelector(".input__checkbox").checked;

        var data = [];
        data.push({
            key: "action",
            value: action
        });
        data.push({
            key: "optionValue",
            value: optionValue
        });
        data.push({
            key: "radioSubscribe",
            value: radioSubscribe
        });
        data.push({
            key: "checkWrap",
            value: checkWrap
        });

        for (var i = 0; i < data.length; i++) {
            localStorage.setItem(data[i].key, data[i].value);
        }
    }

    window.onload = function(e) {
        console.log(performance.navigation.type);

        if (performance.navigation.type === 1) {
            localStorage.clear();
        } else {
            document.querySelector(".input__text--all-width").value = localStorage.getItem("action");

            document.querySelector(".input__number").value = localStorage.getItem("optionValue");

            document.querySelector(".input__radio[value='subscribe']").checked = (localStorage.getItem("radioSubscribe") == 'true' ? "checked" : "");

            document.querySelector(".input__radio[value='unsubscribe']").checked = (localStorage.getItem("radioSubscribe") == 'false' ? "checked" : "");

            (localStorage.getItem("checkWrap") == 'false' ? document.querySelector(".input__checkbox")
                .removeAttribute("checked") : "");

        }
    }
})();
