function check(){
    let inputText = document.getElementById('inputField').value;
    let regex = /[^a-zA-Z0-9]/g;
    let newString = inputText.replace(regex,"").toLowerCase();
    //alert(newString);
    let reverseString = "";
    for (let i=0;i<newString.length;i++){
        let singleLetter = newString.slice(i,i+1);
        reverseString = singleLetter + reverseString;
    }
    if (newString == reverseString){
        document.getElementById('answerText').innerHTML = '<span id="right">&#9745;</span><br>Well done! <br>' + '"' + newString + '" is a palidrome word!';
        //alert('The word you have typed is palidrome!');
    } else{
        document.getElementById('answerText').innerHTML = '<span id="wrong">&#9746;</span><br>Sorry! <br>' + '"' + newString + '" isn\'t a palidrome word';
        //alert('The word you have typed is NOT palidrome. Try again!')
    }
    clearForms();
}

function clearForms(){
    document.getElementById('inputField').value="";
}