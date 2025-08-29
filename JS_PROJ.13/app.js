document.getElementById("calculateBtn").addEventListener('click',function(){
    

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && height && weight){

        const bmi = weight / height;
        const resultElement = document.getElementById("result");

        let category = '';

        if(bmi < 18.5){
            category = 'Under Weight';
        }else if (bmi >= 18.5 && bmi < 24.9){
            category = 'Normal Weight '
        }else if (bmi >= 25 && bmi < 29.9){
            category = 'Over Weight'    
        }else{
            category = 'Obese'
        }

        let resultMessage = 'Your BMI : ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category : ' + category;

        resultElement.innerHTML = resultMessage;


    }



});