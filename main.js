ctx.beginPath();
ctx.strokestyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.stroke();