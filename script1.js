function checkGreeting(){
var hour =
parseInt(document.getElementById("hourInput").value);
}
    if (hour >= 0 && hour < 12){
        alert("Grand Rising!");
    } else if (hour >= 12 && hour <18 ){
        alert("Good Afternoon!");
    } else{
        alert("Good Night!");
    }


function showAlert(){
    alert("Ouch!");
}

function greetUser() {
    var Sunshine = document.getElementById("nameInput").value;
    alert("Hello " + Sunshine + "!");
}