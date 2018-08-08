// JavaScript Document

document.write('кубы чисел меньше 5000');
for(n=1; n<=100; n++)
{
	s=Math.pow(n,3);
	if(s>5000) break;
	document.write('<br>'+n+'<sup>3</sup>='+s);
}



