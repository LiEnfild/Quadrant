// JavaScript File
var a;
var b;
var c;
var D;
var x1, x2;

function quadro() {
    a = Number(prompt("Number a"));
    if (a === 0) {
        alert("Must be no 0!");
        a = Number(prompt("Number a"));
    }
    b = Number(prompt("Number b"));
    c = Number(prompt("Number c"));
    D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        document.write("No rezult");
        return D;
    }
    else if (D === 0) {
        document.write("If D = 0, then only one rezult ");
        x1 = -b / (2 * a);
        document.write("x1 = " + x1);
        return x1;
    }
    else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        document.write("x1 = " + x1 + "<br>");
        document.write("x2 = " + x2 + "<br>");
    }
}
