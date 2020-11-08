 canvas=document.getElementById("my_canvas");
 ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(300,400,35,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",function(e){
    console.log("mouseClick");
    mouse_x= e.clientX - canvas.offsetLeft;
   // mouse_x = e.clientX - canvas.offsetLeft ;
//mouse_y = e.clientY - canvas.offsetTop;
    mouse_y= e.clientY - canvas.offsetTop;
    console.log(mouse_x);
    ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,45,0,360);
ctx.stroke();
});
function circle(){
};