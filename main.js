var c = document.getElementById("toolkit");
var ctx = c.getContext("2d");

window.onload = function() { // This functions whenever the page is loaded
    Draw() ;
}

function Draw() { // A normal function which inclues complete draw method
    ctx.beginPath();
    var x , y , radius ;
    x = 40 ;
    y = 20 ;
    radius = 10 ;
    
    for(var i = 0 ; i < 5 ; i++) {   
        ctx.moveTo(x+radius , y+radius);
        ctx.arc(x  , y+radius , radius , 0 , 2*Math.PI);
        ctx.stroke();
        x+=45;
    }
}

