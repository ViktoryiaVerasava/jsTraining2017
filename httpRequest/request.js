export  default class Request {
    constructor(method, url, success, fail) {
        this.url = url;
        this.method = method;

        var promise = new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();

            xhr.open(this.method, this.url, true);
            xhr.send();

            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) return;
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else reject(xhr.status + ': ' + xhr.statusText);
            }
        });

        promise
            .then(
                result => {
                    return success(result);
                },
                error => {
                    if (fail) {
                        fail(error);
                    }
                }
            );

    }

};
