var data = fetch('https://restcountries.eu/rest/v2/all');

data
    .then(function(res) {
        return res.json();
    })
    .then(function(res) {

        var container = document.createElement('div');
        container.setAttribute('class', 'container bg-dark text-white');
        container.innerHTML = "<h1>This Is RestCountries Data</h1>";
        container.style.textAlign = "center";

        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (var i in res) {
            var col1 = document.createElement('div');
            col1.setAttribute('class', 'col col-lg-4 col-sm-12');
            // col1.setAttribute('style', 'max-width:18px');
            col1.style.padding = "10px";
            col1.style.margin = " 0px";
            //col1.style.padding-left = "20px";

            var card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.style.border = "2px solid black";


            var img = document.createElement("img");
            img.setAttribute("src", res[i].flag);

            var cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');

            var countryName = document.createElement('h3');
            countryName.setAttribute('class', 'name text-success');
            countryName.innerHTML = res[i].name;

            var countryRegion = document.createElement('h5');
            countryRegion.setAttribute('class', 'region text-info');
            countryRegion.innerHTML = res[i].region;

            var countryPopulation = document.createElement('h5');
            countryPopulation.setAttribute('class', 'population text-warning');
            countryPopulation.innerHTML = res[i].population;

            var button = document.createElement('button');
            button.setAttribute('class', 'btn btn-primary');
            button.innerHTML = "Weather";
            button.setAttribute('onclick', `getWeatherData('${res[i].name}')`);



            cardBody.append(countryName, countryRegion, countryPopulation, button);
            card.append(img, cardBody);
            col1.append(card);
            row.append(col1);
            container.append(row);
            document.body.append(container);
        }




    })
    .catch(function(err) {
        console.log(err);
    })

function getWeatherData(button) {
    console.log(button);
    var weatherData = fetch('https://api.openweathermap.org/data/2.5/weather?q=' + button + '&appid=c5b5390e3a082cc54104c942938ffdde')

    weatherData
        .then(function(res) {
            return res.json();
        })
        .then(function(res) {

            alert("temprature is: " + res.main.temp);

            alert("longitude is: " + res.coord.lon + " " + "Lattitude is: " + res.coord.lat)
        })

}

