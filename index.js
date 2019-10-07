
function myEvent(){

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var generateDice1 = "images/dice" + randomNumber1 + ".png";
    var generateDice2 = "images/dice" + randomNumber2 + ".png";
    document.getElementsByTagName("img")[1].setAttribute("src",generateDice1);
    document.getElementsByTagName("img")[2].setAttribute("src",generateDice2);
    if(randomNumber1 == randomNumber2){
        document.getElementsByTagName("h1")[3].innerHTML = "DRAW IN THE MATCH";
    }else if(randomNumber1 > randomNumber2){
        document.getElementsByTagName("h1")[3].innerHTML = "PLAYER 1 WIN";
    }else{
        document.getElementsByTagName("h1")[3].innerHTML = "PLAYER 2 WIN";
    }
}
