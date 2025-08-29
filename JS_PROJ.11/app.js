function calculateMaturityAmount(){

    const principle = parseFloat(document.getElementById('amountNum').value);
    const interestRate = parseFloat(document.getElementById('rateNum').value);
    const tenure = parseFloat(document.getElementById('tenureNum').value);

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    document.getElementById('result').innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;


    


}




























const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', calculateMaturityAmount);