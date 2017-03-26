(function() {
    var firstOpen = true;
    var lastSelectedDate = "";
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var monthValues = ["01", "02", "03", "04", "05", "06",
        "07", "08", "09", "10", "11", "12"
    ];
    var today = new Date();
    this.insertDate = function insert(e) {
        var selectedDate = e.innerText;
        document.querySelector('.datepicker--input').value = monthValues[today.getMonth()] + "/" + selectedDate + "/" + today.getFullYear();
        document.querySelector('.datepicker--calendar').style.display = "none";
        if (lastSelectedDate !== "") {
            document.querySelectorAll(".calendar--num")[lastSelectedDate - 1]
                .setAttribute("style", "background-color:white");
        }
        if (lastSelectedDate == today.getDate()) {
            document.querySelectorAll(".calendar--num")[lastSelectedDate - 1]
                .setAttribute("style", "background-color:yellow");
        }
        lastSelectedDate = selectedDate;
    }

    this.showCalendar = function date() {
        if (document.querySelector('.datepicker--calendar').style.display == "none") {

            document.querySelector('.datepicker--calendar').style.display = "block";

            if (lastSelectedDate !== "") {
                document.querySelectorAll(".calendar--num")[lastSelectedDate - 1].setAttribute("style", "background-color:blue");
            }


            if (firstOpen) {
                firstOpen = false;
                document.querySelector('.calendar--month').innerText = monthNames[today.getMonth()] + " " + today.getFullYear();

                var day = today.getDay();
                var daysTotal = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
                var dayFirst = new Date(today.getFullYear(), (today.getMonth()), 1).getDay();

                var list = document.querySelector(".calendar--numbers");
                for (var i = 0; i < dayFirst; i++) {
                    list.insertAdjacentHTML('beforeEnd', '<div class="calendar--num__notDate" ></div>');
                }

                for (var i = 0; i < daysTotal; i++) {
                    if (i < daysTotal) {
                        list.insertAdjacentHTML('beforeEnd',
                            '<div class="calendar--num" onclick="insertDate(this)"></div>');
                    }
                    document.querySelectorAll(".calendar--num")[i].innerText = i + 1;
                    if (i + 1 == today.getDate()) {
                        document.querySelectorAll(".calendar--num")[i].setAttribute("style", "background-color:yellow");
                    }
                }
            }
        }
    }

    window.onload = function(e) {
        firstOpen = true;
        lastSelectedDate = "";
    }

})();
