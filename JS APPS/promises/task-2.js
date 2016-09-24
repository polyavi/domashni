(function popUp() {
    let promise = new Promise(function (resolve, reject) {
        let websiteSrc = 'https://telerikacademy.com';

        setTimeout(function () {
            resolve(websiteSrc);
        }, 2000);
    });

    promise.then(websiteSrc => window.location.href = websiteSrc);

})();
