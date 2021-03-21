/*  ask to user NAME
    SURNAME
    FAVOURITE COLOR
    and then
    write NAMESURNAMEFAVOURITECOLOR21
*/

//console.log("are you working?");

var username = prompt ("What's your Name?");
console.log("username");

var surname = prompt ("What's your Surname?");
console.log("surname");

var color = prompt ("What's your favorite color?");
console.log("color");

var addNumber = ("21");

var hereYouGo = ("Here you go: ");

var password = hereYouGo + username + surname + color + addNumber;
console.log("password");

document.getElementById("pswd").innerHTML = password;