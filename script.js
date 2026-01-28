function weatherApp(){
    let userInput = document.getElementById("searching").value;
    let resultDiv = document.getElementById("result");
    fetch(`https://api.weatherapi.com/v1/current.json?key=af04768b4689408bada80224262801&q=${userInput}`).then(function(reaction){
        return reaction.json()
    }).then(function(react){
        resultDiv.innerHTML = `
        <h1>${react.location.country}</h1>
        <p>
            ${react.location.name}
            <span>(${react.location.region})</span>
        </p>

        <h1 class="temp">
            ${react.current.temp_c} °C 
            <img src="https:${react.current.condition.icon}" alt="weather icon">
        </h1>

        <p>${react.current.condition.text}</p>
        <p>Humidity ${react.current.humidity}%</p>
        <p>Wind ${react.current.wind_kph}km/h</p>`
        
        resultDiv.classList.add("show-card");
        console.log(react);
    })
    .catch(function(error){
        console.log("Err", error);
        alert("City not found!");
    });
}