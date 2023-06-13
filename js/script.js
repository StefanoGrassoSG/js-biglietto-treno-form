/************
    DATA
*************/

const price = 0.21;

const kmInput = document.querySelector('[name="km"]');

const ageInput = document.querySelector('[name="age]');

const h1 = document.querySelector('h1')

/***************
     BUTTON
***************/

const myButton = document.querySelector('[value="generates"]');
myButton.addEventListener('click',
    function() {
        const kmInput = document.querySelector('[name="km"]');
        const ageInput = document.querySelector('[name="age"]');

        const kmOutput = kmInput.value;
        const ageOutput = ageInput.value;
        
        let finalPrice = kmOutput * price;

        if (ageOutput < 18 && ageOutput > 0) {
            finalPrice = finalPrice * 0.8;
        }

        else if (ageOutput > 65) {
            finalPrice = finalPrice * 0.6;
        }

        h1.innerHTML = finalPrice + '€';
    }
)   