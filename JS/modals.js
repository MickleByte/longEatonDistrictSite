var modals = document.getElementsByClassName('modal');

var btns = document.getElementsByClassName("modalBtn");
Array.from(btns).forEach((ele, index) => ele.addEventListener("click", function() {
    modals[index].style.display = "block";
}, false))


var crosses = document.getElementsByClassName("close");
Array.from(crosses).forEach((ele, index) => ele.addEventListener("click", function() {
    modals[index].style.display = "none";
}, false))

window.onclick = function(event) {
    for (el of modals) {
        if (event.target == el) {
            el.style.display = "none";
        }
    }
}