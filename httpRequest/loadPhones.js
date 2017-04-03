import Request from './request';
function loadPhones() {
    var success = function(data) {
        alert("Fulfilled successfully: \n" + data);
    }
    var fail = function(error) {
        alert("Error is: \n" + error);
    }

    new Request('GET', 'phones.json', success, fail);
    new Request('GET', 'phones1.json', success, fail);
    new Request('GET', 'phones2.json', success);
}

button.addEventListener("click",loadPhones);
