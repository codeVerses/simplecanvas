let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// ctx.moveTo(100,200);
ctx.beginPath();
// ctx.lineWidth=2;
ctx.ellipse(300, 200, 75, 90, 10 * Math.PI/180, 0, 2 * Math.PI);
ctx.moveTo(290, 155);
ctx.lineTo(260, 165);
ctx.moveTo(290, 155);
ctx.lineTo(260, 165);
ctx.stroke(); 

ctx.beginPath();
ctx.lineWidth=2;
ctx.moveTo(290, 155);
ctx.lineTo(260, 165);
ctx.moveTo(310, 155);
ctx.lineTo(335, 165);
ctx.moveTo(300, 210);
ctx.lineTo(305, 208);
ctx.lineTo(295, 190);
ctx.moveTo(300, 210);
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(260,250);
ctx.quadraticCurveTo(300,285,320,260);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=4;
ctx.moveTo(228,180);
ctx.lineTo(250,135);
ctx.lineTo(265,130);
ctx.moveTo(335,128);
ctx.lineTo(355,135);
ctx.lineTo(375,175);
ctx.stroke();