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
    //to draw a line in canvas
    ctx.moveTo(0,80);
    ctx.lineTo(407,80);
    ctx.stroke();
    x=40,y=100;
    for(var i=0;i<5;i++){  //for rectangles
        ctx.rect(x,y,30,30);
        ctx.stroke();
        x+=45;
} 
    
    ctx.moveTo(0,160);
    ctx.lineTo(407,160);
    ctx.stroke();
    ctx.rect(10,y+100,190,310);
    ctx.rect(x-50,200,190,310);
    ctx.stroke();
    
}
    function Vector(x,y){
        this.x=x;
        this.y=y;
    }
    

 function Button(x,y,w,h){
     
     
     var inside = isInside() ;
//      var toplx=x;
//      var toply=y;
//      var toprx=x+w;
//      var topry=y;
//      var botlx=x;
//      var botly=y-h;
//      var botrx=x+w;
//      var botry=y-h;
     var topLeft = new Vector(x,y);
     var bottomRight = new Vector(x+w,y-h);
     var topRight = new Vector(x+w,y-h);
     var bottomRight =new Vector(x+w,y-h);
  } 
function Rectangle(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }   
var posi =new Rectangle()
     
       
 function isInside(pos,rect){
        if  ((pos.x > rect.x) && (pos.x < (rect.x+rect.w){
              if(( pos.y < (rect.y+rect.h) && (pos.y > rect.y))
        return true;
              }
        }