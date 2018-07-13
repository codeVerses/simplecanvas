let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//hands
function drawHands(h1x,h1y,h2x,h2y) {
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.moveTo(278,298);
    ctx.lineTo(h1x,h1y);
    ctx.moveTo(314,300);
    ctx.lineTo(h2x,h2y);
    ctx.stroke(); 
    }

//keyboard
function drawKey() {
    ctx.beginPath();
    ctx.lineWidth=1;
    var imageObj = new Image();
    imageObj.src = 'keyboard.jpg';
    imageObj.onload = function() {
        pat = ctx.createPattern(this, 'repeat');
        ctx.rotate(-52*Math.PI/180);
    ctx.rect(-100,480,150,80);
    ctx.fillStyle=pat;
    ctx.closePath();
    ctx.fill();
    ctx.rotate(52*Math.PI/180);
    }; 
 }


function drawMe() {

ctx.fillStyle="white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//head
ctx.beginPath();
ctx.ellipse(300, 200, 75, 90, 10 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke(); 

//eyes and nose

ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(290, 155);
ctx.lineTo(260, 165);
ctx.moveTo(290, 155);
ctx.lineTo(260, 165);
ctx.moveTo(290, 155);
ctx.lineTo(260, 165);
ctx.moveTo(310, 155);
ctx.lineTo(335, 165);
ctx.moveTo(300, 210);
ctx.lineTo(305, 208);
ctx.lineTo(295, 190);
ctx.moveTo(300, 210);
ctx.stroke(); 

// smile

ctx.beginPath();
ctx.moveTo(260,250);
ctx.quadraticCurveTo(300,285,320,260);
ctx.stroke();

//hair

ctx.beginPath();
ctx.lineWidth=4;
ctx.moveTo(228,180);
ctx.lineTo(250,135);
ctx.lineTo(265,130);
ctx.moveTo(335,128);
ctx.lineTo(355,135);
ctx.lineTo(375,175);
ctx.stroke();

//body
ctx.beginPath();
ctx.lineWidth=1;
ctx.moveTo(270,284);
ctx.lineTo(260,350);
ctx.moveTo(312,288);
ctx.lineTo(320,350);
ctx.stroke(); 
}  

function animate() {
    drawMe();
    drawKey();
    if (anime) {
    drawHands(368,335,374,288); 
    anime = !anime
    }
    else {
    drawHands(368,280,382,324);  
    anime = !anime
    }
}
anime = true;
animate();
var input = document.getElementById('input');
input.addEventListener("keypress", animate);

