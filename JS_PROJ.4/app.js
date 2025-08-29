const options = [
    {id:"option1", text:"JavaScript", vote: 0},
    {id:"option2", text:"Python", vote: 0},
    {id:"option3", text:"Java", vote: 0},
    {id:"option4", text:"C++", vote: 0},
];

function submitVote(){

    let selectedOption = document.querySelector('input:checked');
    
    if(!selectedOption){
        alert("Please select a option");
        return;
    }

    let optionId = selectedOption.value;
    let selectedObj = options.find((option)=> option.id === optionId);
    console.log(selectedObj);
    if(selectedObj){
        selectedObj.vote++;
        displayResult();
    }
}

function displayResult(){

    let result = document.getElementById('result');
    result.innerHTML = "";

    options.forEach(option => {
        let parcentage = ((option.vote / getTotalVotes()) * 100).toFixed(2) || 0;
        let barwidth = parcentage > 0 ? parcentage + "%" : "0%";

        let optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <span class = "option-text">${option.text}</span>
            <div class = "bar-container">
                <div class = "bar", style = "width = ${barwidth};"></div>
            </div>
            <span class = "parcentage">${parcentage}</span>
        `;
        result.appendChild(optionResult);
    });

}

function getTotalVotes(){
    return options.reduce((total,option)=> total + option.vote,0);
}








let button = document.getElementById('submit');
button.addEventListener('click', submitVote);