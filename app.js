const button = document.querySelector('.random');
const body = document.querySelector('body');
const display = document.querySelector('.display');
const disp2 = document.querySelector('.disp2');
const disp3 = document.querySelector('.disp3');

const rand = (x) => {
    return (Math.floor(Math.random()*x)+1);
}

button.addEventListener('click' , () => {
    let color = `rgb(${rand(255)},${rand(255)},${rand(255)})`;
    display.innerText= `Background Color is: ${color}`;
    body.style.backgroundColor = color;
    let buttonback = `rgb(${rand(255)},${rand(255)},${rand(255)})`;
    disp2.innerText=`Button Background Color is : ${buttonback}`;
    button.style.backgroundColor = buttonback;
    let buttonborder = `rgb(${rand(255)},${rand(255)},${rand(255)})`;
    disp3.innerText = `Button Border Color is : ${buttonborder}`;
    button.style.borderColor = buttonborder;
});