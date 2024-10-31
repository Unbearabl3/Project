const burgerButton = document.getElementById('buttonBurger');
const burger = document.getElementById('burger');
const buttonBurgerClose = document.getElementById('buttonBurgerClose');
const buttonForOtherLinks = document.getElementById('buttonForOtherLinks');
const otherPc = document.getElementById('otherPc');
const burgerButtonForOther = document.getElementById('burgerButtonForOther');
const burgerAdditionalMenu = document.getElementById('burgerAdditionalMenu');
const form = document.getElementById('form');

if (burgerButton) {
    burgerButton.addEventListener('click', function(e){
        console.log('Button clicked');
        burger.classList.toggle('active');
    });
}

if (buttonBurgerClose) {
    buttonBurgerClose.addEventListener('click', function(e){
        console.log('Button close');
        console.log(buttonBurgerClose)
        burger.classList.remove('active');
    });    
}

// scripts for making other button(menu which will be opebable) and burger
if (buttonForOtherLinks) {
    buttonForOtherLinks.addEventListener('click', function(e){
        e.preventDefault();
        console.log('Button for other links clicked');
        otherPc.classList.toggle('active');
    });
    
}
if(buttonForOtherLinks) {
    burgerButtonForOther.addEventListener('click', function(e){
        console.log(e);
        burgerAdditionalMenu.classList.toggle('active');
    });    
}
if (form) {
    form.addEventListener('submit', function(e) {
        console.log(form);
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const age = document.getElementById('age').value;
            const email = document.getElementById('email').value;
    
    
            let gender;
            if (document.getElementById('male').checked) {
                gender = 'male';
            } else if (document.getElementById('female').checked) {
                gender = 'female';
            } else if (document.getElementById('other').checked) {
                gender = 'other';
            }
    
            console.log('Name:', firstName);
            console.log('Surname:', lastName);
            console.log('Age:', age);
            console.log('Email:', email);
            console.log('Gender:', gender);
            e.preventDefault();
    });
    console.log(burgerButtonForOther);
    console.log(form);
}

function calculate() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    const operation = document.getElementById("operation").value;
    let result;
    if(isNaN(value1) || isNaN(value2)) {
        result = 'please enter a valid values';
    } else {
        if(operation == "+") {
            result = value1 + value2;
        } else if (operation == "-") {
            result = value1 - value2;
        }
        else if (operation == "*") {
            result = value1 * value2;
        }
        else if (operation == "/") {
            result = value1 / value2;
        }
    }
    document.getElementById("result").innerText = `Result: ${result}`;
}


function calculate2() {
    const angle = parseFloat(document.getElementById("angle").value);
    const operation2 = document.getElementById("operation2").value;
    let result2;
    if(isNaN(angle)) {
        result2 = 'please enter a valid values';
    } else {
        if(operation2 == "sin") {
            let radians = angle * (Math.PI / 180);  
            console.log(radians);
            result2 = Math.sin(radians).toFixed(4);
        } else if (operation2 == "cos") {
            let radians = angle * (Math.PI / 180);
            result2 = Math.cos(radians).toFixed(4);
        } else if (operation2 == "tan") {
            let radians = angle * (Math.PI / 180);
            result2 = Math.tan(radians).toFixed(4);
        } else if (operation2 == "cot") {
            if(angle == 0) {
                result2 = 'Cotangent is undefined';
            } else if(angle = 180) {
                result2 = "cotangent is undefined";
            }  else {
                let radians = angle * (Math.PI / 180);
                result2 = (1 / Math.tan(radians)).toFixed(4);
            }
        }
    }
    document.getElementById("result2").innerText = `Result: ${result2}`;
    console.log(angle, operation2)
}

// API
const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52,35.6895,51.5085&longitude=13.41,139.6917,-0.1257&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min"
const Petro = document.getElementById("Petro");
const Tokyo = document.getElementById("Tokyo");
const London = document.getElementById("London");
async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) { 
      throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    let avgTemperature1 = Math.ceil(data[0].daily.temperature_2m_max.reduce((acc, el) => acc + el, 0) / data[0].daily.temperature_2m_max.length);
    let avgTemperature2 = Math.ceil(data[1].daily.temperature_2m_max.reduce((acc, el) => acc + el, 0) / data[1].daily.temperature_2m_max.length);
    let avgTemperature3 = Math.ceil(data[2].daily.temperature_2m_max.reduce((acc, el) => acc + el, 0) / data[2].daily.temperature_2m_max.length);
    Petro.innerText = `Avg temp: ${avgTemperature1}°C`;
    Tokyo.innerText = `Avg temp: ${avgTemperature2}°C`;
    London.innerText = `Avg temp: ${avgTemperature3}°C`;
} catch (error) {
    console.error('Ошибка запроса:', error);
  }
}

getWeather();

