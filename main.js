// https://openweathermap.org

// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=&units=metric


const myForm = document.querySelector('.top-banner form');
const myInput = document.querySelector('.top-banner form input');
const myButton = document.querySelector('.top-banner form button');
const my_msg = document.querySelector('.msg');
const my_ul = document.querySelector('.ajax-section .cities');

const apiKey = '55dbd858fc1dbf75dad08b8acda7b9eb';


myForm.addEventListener('submit', e => {
    e.preventDefault();
    let inputValue = myInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {main, name, sys, weather} = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            const li = document.createElement('li');
            li.classList.add('city');
            const markup = `
            <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class='city-temp'>${Math.round(main.temp)}</div>
            <figure>
                <img class='city-icon' src='${icon}' alt="weather icon">
                <figurecaption>${weather[0]['description']}</figurecaption>
            </figure>
            `;
            li.innerHTML = markup;
            my_ul.appendChild(li);
            my_msg.innerText = '';
        })
        .catch (() => {
            my_msg.innerText = 'City not Found!';
        })
        myInput.value = '';
        
})











