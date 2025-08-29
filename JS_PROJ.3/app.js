function checkVowels(){
    let text = document.getElementById('content').value;
    let vowelCount = 0;

    for(let i = 0; i < text.length; i++){
        let char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = 'Total Vowels:' + vowelCount;


}


function isVowel(char){
    const Vowels = ['a','e','i','o','u'];
    return Vowels.includes(char);
}





let countbtn = document.getElementById('countbtn');
countbtn.addEventListener('click', checkVowels);