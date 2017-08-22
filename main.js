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
    radius = 20 ;
    
    for(var i = 0 ; i < 10 ; i++) {   
        ctx.moveTo(x+radius , y+radius);
        ctx.arc(x  , y+radius , radius , 0 , 2*Math.PI);
        ctx.stroke();
        x += 45;
    }
}

function Vector(someX , someY) {
    this.x = someX ;
    this.y = someY ;
}

var time = new Vector(10 ,120) ;

console.log(time) ;

function OnMouseClick(mouseData) {
    var x = mouseData.clientX ;
    var y = mouseData.clientY ;
    
    var MousePosition = new Vector(x,y) ;
//    console.log("x : "+x+" y :"+y) ;
}

c.addEventListener("click" , OnMouseClick) ;

console.log("Script was succesfully executed") ;