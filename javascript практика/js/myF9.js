// JavaScript Document

document.write('кубы чисел от 1 до 100 меньше 5000 и больше 1000');
for(n=1; n<=100; n++)
{
	s=Math.pow(n,3);
	if (s < 5000 && s > 1000)
	document.write('<br>'+n+'<sup>3</sup>='+s); 
}


