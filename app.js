var a;

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);

function fetchData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=c0c1fb6318fb7853720db372fb06c4ad&lat=19.169095499999997&lon=72.86735279999999')
        .then(res => res.json())
        .then(res => displayData(res));

}

function displayData(a) {
    var weather = a.weather;
    console.log(weather);
}

/*https://api.openweathermap.org/data/2.5/weather?appid=c0c1fb6318fb7853720db372fb06c4ad&lat=19.169095499999997&lon=72.86735279999999

Latitude : 19.169095499999997
Longitude: 72.86735279999999*/