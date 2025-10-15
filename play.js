function player(){
    var div = document.querySelector(".player");
    div.style.display = "block";
    setTimeout(() => {
        div.style.transform = "translateY(0%)";
        // div.innerHTML = `<iframe width="1058" height="595" src="https://www.youtube.com/embed/2yobIQSv7IY" title="WE ARE SO COOKED!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }, 100);
}