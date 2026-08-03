let searchIcon=document.getElementById("search_icon_container");
let cityName=document.getElementById("city_name_input_box");
let weatherURL;
searchIcon.addEventListener("click",async ()=>{
    let cityNameValue=cityName.value;
    weatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=d10bb4d61c95b1db29378a88b531af0f`;
    let weatherAPI=await fetch(weatherURL);
    let weatherReport= await weatherAPI.json();
    console.log(weatherReport);
    if (weatherReport.cod==404){
        alert("City not found. Please enter valid city name.");
        return;
    }
    document.getElementById("location_name").textContent=weatherReport.name;
    document.getElementById("weather_name").textContent=weatherReport.weather[0].description;
    document.getElementById("temperature_value").textContent=parseInt(weatherReport.main.temp-273.15);
    document.getElementById("humidity_value").textContent=`${weatherReport.main.humidity} %`;
    document.getElementById("wind_value").textContent=`${weatherReport.wind.speed} km/hr`;
    let weatherID=weatherReport.weather[0].id; 
    let weatherImage=document.getElementById("weather_image");
    console.log(weatherID);
    if(weatherID>=200 && weatherID<=232){
        weatherImage.src="../../assests/images/WeatherThunder.png";
    } 
    else if(weatherID>=300 && weatherID<=321){ 
        weatherImage.src="../../assests/images/WeatherDizzle.png";
    }
    else if(weatherID>=500 && weatherID<=532){ 
        weatherImage.src="../../assests/images/WeatherRain.png";
    }
    else if(weatherID>=600 && weatherID<=622){
        weatherImage.src="../../assests/images/WeatherSnow.png";
    }
    else if(weatherID>=701 && weatherID<=781)
    {
        weatherImage.src="../../assests/images/Weather.png";
    }
    else if(weatherID==800){
        weatherImage.src="../../assests/images/WeatherClearSky.png";
    }
    else if(weatherID>=801 && weatherID<=804){    
        weatherImage.src="../../assests/images/WeatherBrokenClouds.png";
    }
    cityName.value="";
}); 

 
