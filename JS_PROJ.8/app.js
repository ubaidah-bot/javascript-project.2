function calculateTip(){
    
const billAmountInput = document.getElementById('billAmount');
const serviceRatingSelect = document.getElementById('serviceRating');
const peopleCountInput = document.getElementById('peopleCount');
const mealTypeSelect = document.getElementById('mealType');


const tipAmountOutput = document.getElementById('tipAmount');
const totalAmountOutput = document.getElementById('totalAmount');
const amountPersonOutput = document.getElementById('amountPerson');


const billAmount = parseFloat(billAmountInput.value);
const serviceRating = parseFloat(serviceRatingSelect.value);
const peopleCount = parseFloat(peopleCountInput.value);
const mealType = parseFloat(mealTypeSelect.value);

if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(peopleCount) || isNaN(mealType)){
    tipAmountOutput.textContent = 'Please Enter Valid Numbers';
    totalAmountOutput.textContent = "";
    amountPersonOutput.textContent = "";
    return;
}

let tip;
    switch(serviceRating){
        case 1:
            tip = billAmount * 0.05;
            break;
        case 2:
            tip = billAmount * 0.10;
            break;
        case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
    }

    let totalAmount = billAmount + tip;
    let amountPerson = totalAmount / peopleCount;

    if(mealType === "dinner"){
        tip += 5;
        totalAmount += 5;
        amountPerson += 5;
    }

    tipAmountOutput.innerHTML = `Tip: ${tip.toFixed(2)}`;
    totalAmountOutput.innerHTML = `Total Amount: ${tip.toFixed(2)}`;
    amountPersonOutput.innerHTML = `Amount Persons: ${tip.toFixed(2)}`;

}
