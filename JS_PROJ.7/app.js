let button = document.getElementById('calculateBtn');
button.addEventListener('click', calculateLoan);

function calculateLoan(){

const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
const interestRate = parseFloat(document.getElementById("interestRateInput").value);
const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
    alert("Please Enter valid Numbers for all the fields");
}

const montlyInterest = interestRate / 100 / 12;
const totalPayment = loanTerm;
const monthlyPayment = (loanAmount * montlyInterest)/(1-Math.pow(1 + montlyInterest, -totalPayment));
const totalInterest = (monthlyPayment * totalPayment) - loanAmount;


displayResult(monthlyPayment,totalInterest);

}

function displayResult(monthlyPayment, totalInterest){

const resultDiv = document.getElementById('result');
resultDiv.innerHTML = 
`
    <p>Montly Payment: ${Math.floor(monthlyPayment)}</p>
    <p>Total Interest: ${Math.floor(totalInterest)}</p>
`;

}