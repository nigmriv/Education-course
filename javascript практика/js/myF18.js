mono = new Array(9);
color = new Array(9);
for(i=0;i<9;i++)
{
    mono[i] = new Image();
    color[i] = new Image();

    mono[i].src  = "img/cell"+(i+1)+".gif";
    color[i].src = "img/cellC"+(i+1)+".gif";
}
var trassa = new Array();
trassa[0] = new Array(0,3,6,7,4,5,8);
trassa[1]=new Array(0,1,2,3,4,5,6,7,8);
function ChangeMap(colorit)
{
    t=trassa[0];
    cvetkletki = (colorit)? "otvet":"mono";
    for(k=0;k<t.length;k++)
    {
        kletka=t[k];
        eval("document.m"+kletka+".src="+cvetkletki+"["+kletka+"].src");
    }
}
