/************
    DATA
*************/

const price = 0.21;

const outPut = document.getElementById('price')

/***************
     BUTTON
***************/

const myButton = document.querySelector('[value="Generates"]');
myButton.addEventListener('click',
    function() {
        const kmInput = document.querySelector('[name="km"]');
        const ageInput = document.querySelector('[name="age"]');

        const kmOutput = kmInput.value;
        const ageOutput = ageInput.value;
        
        let finalPrice = kmOutput * price;

        if (ageOutput == 'underage') {
            finalPrice = finalPrice * 0.8;
        }

        else if (ageOutput == 'Over65') {
            finalPrice = finalPrice * 0.6;
        }

        outPut.innerHTML = finalPrice.toFixed(2) + '€';
        
    }
)   