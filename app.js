let audio = new Audio("audio.mp3")
let attention = document.querySelectorAll(".attention");

document.addEventListener("click", ifAllowed);
audio.addEventListener("ended", isOver);

let size = {
    width: document.body.clientWidth / 3,
    height: document.body.clientHeight / 2
}

let centered = {
    x: document.body.clientWidth / 2 - size.width / 2,
    y: document.body.clientHeight / 2 - size.height / 2
}

function makeTable(rows, colums) {
    let _x;
    let _y;
    let count = -1;
    let i = 0;
    let k = 0;
    for (let i = 0; i < colums; i++) {
        _y = size.width * i;
        for (let k = 0; k < rows; k++) {
            count++;
            _x = size.width * k;
            openWindow(`${count}.html`, size.width, size.height, _x, _y);
        }
    }
}

function openWindow(link, w, h, left, top) {
    let rand = Math.random();
    window.open(link,
    rand,
    `left=${left},top=${top},width=${w},height=${h}`);
}

function ifAllowed() {
    for (let i = 0; i < attention.length; i++) {
        attention[i].style.display = "none";
    }
    audio.play();
    makeTable(3, 2);
}

function isOver() {
    attention[0].style.display = "flex";
    attention[0].innerHTML = 'Если хочешь ещё кликни!'
    openWindow(`ending.html`, size.width, size.height, centered.x, centered.y);
}