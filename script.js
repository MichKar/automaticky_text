const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Text se vypisuje automaticky";
let idletter = 1;
let delay = 500 / speedOr.value;

console.log(speedOr.value);

function printText() {
    heading.innerText = text.slice(0, idletter);

    idletter++;

    if (idletter > text.length) {
        idletter = 1;
    }

    setTimeout(printText, delay);
};

printText();

speedOr.addEventListener("input", function (event) {
    delay = 500 / event.target.value;
});