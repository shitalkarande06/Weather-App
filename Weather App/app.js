  const API_key ='c98bcf5dd1814b4815a3f60a1ede6dff';

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather  = document.querySelector("#weather");

const getWeather = async(city) =>{
    const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
    const data = await response.json()
  return showWeather(data);
};
    const showWeather = (data) => {
        console.log(data);
        if(data.code == "404"){
            weather.innerHTML = `<h2>City Not Found</h2>`
            return;
        }
        weather.innerHTML = ` <div>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃ </h2> 
        <h4>${data.weather[0].main}</h4>
    </div>`
    };


form.addEventListener("submit", function(event) {
    getWeather(search.value);
    event.preventDefault();
});