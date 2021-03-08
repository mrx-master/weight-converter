// Dont show cards for first time
document.getElementById('output').style.visibility = 'hidden';

var input = document.getElementById('input')
var select = document.getElementById('select')
var ph = document.getElementById('input')

input.addEventListener('input', myResult);
select.addEventListener('change', myResult);


lbsDisplay = document.getElementById('lbsOutput').parentElement.parentElement
lbsDisplay.style.display = 'none';
kgDisplay = document.getElementById('kgOutput').parentElement.parentElement
ozDisplay = document.getElementById('ozOutput').parentElement.parentElement
gDisplay = document.getElementById('gramsOutput').parentElement.parentElement

function myResult() {
    document.getElementById('output').style.visibility = 'visible';

    if (select.value == 'lbs'){
        ph.placeholder = 'Enter Pounds...'
        lbsDisplay.style.display = 'none';
        kgDisplay.style.display = ''
        ozDisplay.style.display = ''
        gDisplay.style.display = ''
        document.getElementById('gramsOutput').innerHTML = input.value * 453.592
        document.getElementById('kgOutput').innerHTML = input.value * 0.453592
        document.getElementById('ozOutput').innerHTML = input.value * 16
    }

    if (select.value == 'kg'){
        ph.placeholder = 'Enter Kilograms...'
        lbsDisplay.style.display = ''
        kgDisplay.style.display = 'none'
        ozDisplay.style.display = ''
        gDisplay.style.display = ''
        document.getElementById('gramsOutput').innerHTML = input.value * 1000
        document.getElementById('lbsOutput').innerHTML = input.value * 2.20462
        document.getElementById('ozOutput').innerHTML = input.value * 35.274
    }

    if (select.value == 'g'){
        ph.placeholder = 'Enter Grams...'
        lbsDisplay.style.display = ''
        kgDisplay.style.display = ''
        ozDisplay.style.display = ''
        gDisplay.style.display = 'none'
        document.getElementById('kgOutput').innerHTML = input.value * 0.001
        document.getElementById('lbsOutput').innerHTML = input.value * 0.00220462
        document.getElementById('ozOutput').innerHTML = input.value * 0.035274
    }

    if (select.value == 'oz'){
        ph.placeholder = 'Enter Ounces...'
        lbsDisplay.style.display = ''
        kgDisplay.style.display = ''
        ozDisplay.style.display = 'none'
        gDisplay.style.display = ''
        document.getElementById('kgOutput').innerHTML = input.value * 0.0283495
        document.getElementById('lbsOutput').innerHTML = input.value * 0.0625
        document.getElementById('gramsOutput').innerHTML = input.value * 28.3495
    }
}