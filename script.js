var display = document.getElementById("display");
var n0 = document.getElementById("n0");
const n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var C = document.getElementById("C");
var eql = document.getElementById("eql");
var add = document.getElementById("+");
var s = document.getElementById("s");
var m = document.getElementById("x");
var d = document.getElementById("d");

n1.addEventListener("click", function () {
    run(n1);
});
n2.addEventListener("click", function () {
    run(n2);
});
n3.addEventListener("click", function () {
    run(n3);
});
n4.addEventListener("click", function () {
    run(n4);
});
n5.addEventListener("click", function () {
    run(n5);
});
n6.addEventListener("click", function () {
    run(n6);
});
n7.addEventListener("click", function () {
    run(n7);
});
n8.addEventListener("click", function () {
    run(n8);
});
n9.addEventListener("click", function () {
    run(n9);
});
n0.addEventListener("click", function () {
    run(n0);
});
add.addEventListener("click", function () {
    run(add);
});
s.addEventListener("click", function () {
    run(s);
});
x.addEventListener("click", function () {
    run(x);
});
d.addEventListener("click", function () {
    run(d);
});
C.addEventListener("click", clear);
eql.addEventListener("click", equal);

function clear() {
    display.innerText = "";
}

function run(button) {
    display.innerText = display.innerText + button.innerText;
}
function equal() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = "error";
        clear();
    }
}
