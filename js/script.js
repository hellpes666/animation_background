function lines() {
    let sizeW = Math.random() * 25;
    let duration = Math.random() * 3;
    let e = document.createElement("div");
    e.setAttribute("class", "circle");
    document.body.appendChild(e);

    e.style.width = sizeW + "px";
    e.style.left = Math.random() * +innerWidth + "px";
    e.style.animationDuration = 2 + duration + "s";

    setTimeout(function (){
        document.body.removeChild(e);
    }, 4500);
}
setInterval(function(){
    lines();
}, 200);