menu.onclick = function myFunction(){
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}
document.querySelector('#submit').onclick = function(){
    alert("Ваша заявка была отправлена")
}