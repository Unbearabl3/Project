let burgerButton = document.getElementById('buttonBurger');
let burger = document.getElementById('burger');
let buttonBurgerClose = document.getElementById('buttonBurgerClose');
let buttonForOtherLinks = document.getElementById('buttonForOtherLinks');
let otherPc = document.getElementById('otherPc');
let burgerButtonForOther = document.getElementById('burgerButtonForOther');
let burgerAdditionalMenu = document.getElementById('burgerAdditionalMenu');
let form = document.getElementById('form');



burgerButton.addEventListener('click', function(e){
    console.log('Button clicked');
    burger.classList.toggle('active');
});

buttonBurgerClose.addEventListener('click', function(e){
    console.log('Button close');
    console.log(buttonBurgerClose)
    burger.classList.remove('active');
});

// scripts for making other button(menu which will be opebable) and burger
buttonForOtherLinks.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Button for other links clicked');
    otherPc.classList.toggle('active');
});

burgerButtonForOther.addEventListener('click', function(e){
    console.log(e);
    burgerAdditionalMenu.classList.toggle('active');
});

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
            }   else {
                let radians = angle * (Math.PI / 180);
                result2 = (1 / Math.tan(radians)).toFixed(4);
            }
        }
    }
    document.getElementById("result2").innerText = `Result: ${result2}`;
    console.log(angle, operation2)
}

