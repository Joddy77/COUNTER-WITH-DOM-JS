const plusButton = document.querySelector('#plusButton');
const minusButton = document.querySelector('#minusButton');
const display = document.querySelector('#display');

let displayCount = 0;

plusButton.addEventListener('click', function () {
    displayCount += 1;
    display.textContent = displayCount;
})

minusButton.addEventListener('click', function () {
    if(displayCount > 0) {
        displayCount -= 1; 
        display.textContent = displayCount;
    }
})