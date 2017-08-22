"use strict";
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
    

 
     
     

    // var topLeft = new Vector(40,100);
     //var bottomRight = new Vector(x+w,y-h);
     //var topRight = new Vector(x+w,y-h);
     //var bottomRight =new Vector(x+w,y-h);
//     var inside = isInside() ;


function mousePos(event){//when we click on ccanvas this functuion is called
   
    var x = event.clientX ;
    var y = event.clientY ;
    console.log(x+" , "+y) ;
    
    var pos = new Vector(x,y) ;
    
     if(isInside(pos, rect)){
       console.log("clicked inside"); 
    }
    else{
        console.log("clicked outside");                
    } 
}

    function isInside( pos, rect){//to check mouse pos and rectangle pos
        if  ( (pos.x > rect.x) && (pos.x < (rect.x+rect.w)) )
              if(( pos.y < (rect.y+rect.h) && (pos.y > rect.y)))
                return true;
              
        }

    function Rectangle(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    
}
 var arr=[]; 
var x1=40;
 for(i=0;i<5;i++){
     
     var rect = new Rectangle(x1,100,30,30);
     arr.push(rect);
     x1+=45;
      
 }
     c.addEventListener("click" , mousePos) ;


  function Button(){
      this.rect= new Rectangle(30,40,30,30);
      this.color= "#FF0000";
      
  }      
  Button.prototype.Draw=function(ctx){
     ctx.rect(this.rect.x,this.rect.y,this.rect.w,this.rect.h);
        
  }
     
    

var myButton=[];
for(var i=0;i<5;i++){
    var butn = new Button(30,40,30,30);
    myButton.push(butn);
    
}

    for (var i=0;i<myButton.length;i++){
        myButton[i].Draw(ctx);
    }
        
       




