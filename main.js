var c = document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
var x=20,r=10,y=15;
for(var i =0;i<5;i++)
    {   ctx.moveTo(x+r,y+r);
        ctx.arc(x,y+r,r,0,2*Math.PI);
        ctx.stroke();
        x+=45;
    }

