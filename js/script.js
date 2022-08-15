//VARIABLES

let cardName = document.getElementById('cardName');
let cardNumber = document.getElementById('cardNumber');
let cardDate = document.getElementById('cardDate');
let cardCvc = document.getElementById('cardCvc');
let inputName = document.getElementById('inputName');
let inputNumber = document.getElementById('inputNumber');
let inputDate1 = document.getElementById('inputDate1');
let inputDate2 = document.getElementById('inputDate2');
let inputCvc = document.getElementById('inputCvc')
let span1 = document.getElementById('span1')
let span2 = document.getElementById('span2')
let span3 = document.getElementById('span3')
let completedForm = document.getElementById('completedForm')
let formContainer = document.getElementById('formContainer')

//EVENTS

inputName.addEventListener('input',changeCardData);
inputNumber.addEventListener('input',changeCardData);
inputDate1.addEventListener('input',changeCardData);
inputDate2.addEventListener('input',changeCardData);
inputCvc.addEventListener('input',changeCardData);

//FUNCTIONS

function changeCardData() {
    //Add a '-' every 4 digits in the inputNumber
    let valueNumber = [...inputNumber.value].reduce((p, c, i) => p += (i && !(i % 4)) ? "-" + c : c, "");

    cardName.innerHTML = inputName.value.toUpperCase();
    if(valueNumber.length <= 20){
        cardNumber.innerHTML = valueNumber;
    }
    cardDate.innerHTML = inputDate1.value + "/" + inputDate2.value;
    cardCvc.innerHTML = inputCvc.value;
}

function validateFields(){

    if(/^[0-9]+$/.test(inputNumber.value) && inputNumber.value.length == 16){
        span1.classList.add('dNone')
        inputNumber.classList.remove('bRed')

        if (inputDate1.value !== "" && inputDate1.value <= 12 && inputDate1.value > 0) {
            span2.classList.add('dNone')
            inputDate1.classList.remove('bRed')
            if (inputDate2.value !== "") {
                span2.classList.add('dNone')
                inputDate2.classList.remove('bRed')
                if (inputCvc.value !== "") {
                    span3.classList.add('dNone')
                    inputCvc.classList.remove('bRed')
                    completedForm.classList.remove('dNone')
                    formContainer.classList.add('dNone')
                } else {
                    span3.classList.remove('dNone')
                    inputCvc.classList.add('bRed')
                }
            } else {
                span2.classList.remove('dNone')
                inputDate2.classList.add('bRed')
            }
        }else{
            span2.classList.remove('dNone')
            inputDate1.classList.add('bRed')
        }
    }else{
        span1.classList.remove('dNone')
        inputNumber.classList.add('bRed')
    }
}

