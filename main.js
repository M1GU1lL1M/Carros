id = null
function myMove() {
    var elem = document.getElementById("easteregg");
    var pos = -200;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        pos += 7;
        elem.style.left = pos + 'px';
        elem.style.display = 'block'
    }
}