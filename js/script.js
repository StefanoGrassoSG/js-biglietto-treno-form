/************
    DATA
*************/

const price = 0.21;
const outPut = document.getElementById('price')
const wagon = document.getElementById('wagon')
const code = document.getElementById('CP')
const passenger = document.getElementById('pass')

/***************
     BUTTON
***************/

const myButton = document.querySelector('[value="Generates"]');
myButton.addEventListener('click',
    function() {
        const nameInput = document.querySelector('[name="name"]')
        const kmInput = document.querySelector('[name="km"]');
        const ageInput = document.querySelector('[name="age"]');

        const nameOutput = nameInput.value;
        const kmOutput = kmInput.value;
        const ageOutput = ageInput.value;
        
        let finalPrice = kmOutput * price;

        if (ageOutput == 'underage') {
            finalPrice = finalPrice * 0.8;
        }

        else if (ageOutput == 'Over65') {
            finalPrice = finalPrice * 0.6;
        }

        const random = Math.floor(Math.random() * 10) + 1;

        const cpRandom = Math.floor(Math.random() * 10000) + 90000;

        passenger.innerHTML = nameOutput;

        outPut.innerHTML = finalPrice.toFixed(2) + '€';

        wagon.innerHTML = random;
        code.innerHTML = cpRandom;

    }
)   