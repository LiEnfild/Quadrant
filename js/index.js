// JavaScript File
var a = Number(prompt('Give me the a number!'));
var b = Number(prompt('Give me the b number!'));
var c = Number(prompt('Give me the c number!'));
var x;

Function result(a,b,c) {
    var res=b*b-4*a*c
    if (res>0) {
        return x=[(-b-math.sqrt(res))/2*a, (-b+math.sqrt(res))/2*a)];
    } else {
        return x= "No rezult";
    }
}
document.write(x);

