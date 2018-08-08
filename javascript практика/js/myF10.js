// JavaScript Document

//пример 1

function f(a,b,c) {
	if (a>b) return c;
	else return c+8;
}

var g=f;
alert('значение f(2,3,2): '+f(2,3,2));
alert('значение g(2,3,2): '+f(2,3,2));

//пример 2

function squere(a)
{return a*a;}
function polinom(a,k)
{return k(a)+a+5;}
alert(polinom(3,squere));

//пример 3

function superpower() {
    var k = parseInt(document.f.k.value), 
	f = parseInt(document.f.f.value);
    alert(Math.pow(f,k));
}

//пример 4

function Rectangle(a,b,c,d)
{
	this.x0 = a;
	this.y0 = b;
	this.x1 = c;
	this.y1 = d;
	this.area = new Function("return Math.abs((this.x1-this.x0)*(this.y1-this.y0))");
}

r=new Rectangle(0,0,30,50);
document.write("площадь: "+r.area());