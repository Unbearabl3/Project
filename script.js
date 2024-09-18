let burgerButton = document.getElementById('buttonBurger');
let burger = document.getElementById('burger');
let buttonBurgerClose = document.getElementById('buttonBurgerClose');

burgerButton.addEventListener('click', function(e){
    console.log('Button clicked');
    burger.classList.toggle('active');
});

buttonBurgerClose.addEventListener('click', function(e){
    console.log('Button close');
    console.log(buttonBurgerClose)
    burger.classList.remove('active');
});
