function player(){
    var div = document.querySelector(".player");
    div.style.display = "block";
    setTimeout(() => {
        div.style.transform = "translateY(0%)";
    }, 100);
}