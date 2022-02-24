const weatherTemp = document.querySelector('.weatherTemp');
const weatherCity = document.querySelector('.weatherCity');
const weatherIcon = document.querySelector('.weatherIcon img');


const success = (position) =>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = 'abf7e052c3925dbae905a657956470b7';
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then( (response) =>{
        return response.json();
    }).then( (data) =>{
        const iconName= data.weather[0].icon //this will hold the icon
        const loadIcon = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
        weatherTemp.innerText = Math.floor(data.main.temp)+'º';
        weatherCity.innerText = data.name;
        weatherIcon.src = loadIcon ;
    });
}
const error = () =>{
    alert('위치 정보를 알 수 없습니다.');
};
navigator.geolocation.getCurrentPosition(success, error);