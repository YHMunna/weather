const Api_Key = `d06d400c085409ad8ab54beb6920e850`;
const searchTemp = () => {
    const cityField = document.getElementById('cityName').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityField}&appid=${Api_Key}&units=metric`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherData(data))
}
const setSearchField = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayWeatherData = (temp) => {
    setSearchField('city', temp.name);
    setSearchField('temparature', temp.main.temp);
    setSearchField('weather', temp.weather[0].main);
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imageIcon = document.getElementById('weathericon').setAttribute('src',
        url);
}