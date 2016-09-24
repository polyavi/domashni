(function getLocation() {
    var location = new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position);
        });
    });

    function drawMap(position) {
        let lat = position.coords.latitude,
            long = position.coords.longitude,
            container = document.getElementById('container'),
            image = document.createElement('img');

        let imageSrc = 'https://maps.googleapis.com/maps/api/staticmap?center=' +
            lat + ',' + long + '&zoom=18&size=500x500&sensor=false';

        image.src = imageSrc;
        container.appendChild(image);
    }

    location.then(drawMap);

})();
