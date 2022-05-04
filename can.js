const canvas=document.getElementById('canvas');
console.log(canvas);
const ctx=canvas.getContext('2d')
console.log(ctx);







// ctx.beginPath()
// ctx.lineWidth='5'
// ctx.strokeStyle="green"
// ctx.moveTo(10, 200);
// ctx.lineTo(250, 200);
// ctx.stroke();
// ctx.beginPath()
// ctx.lineWidth='5'
// ctx.strokeStyle="green"
// ctx.moveTo(20, 200);
// ctx.lineTo(80, 400);
// ctx.stroke();

// for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
//                        Math.floor(255 - 42.5 * j) + ', 0)';
//       ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
//   }
// ctx.fillStyle="silver"
// ctx.fillRect(100,100,500,500);
// ctx.fillStyle="red";
// ctx.fillRect(125,125,350,350);
// let a=0
// for(let i=1;i<6;i++)
// {
//     a++;
//     for(let j=1;j<6;j++)
//     {
//        if(a%2===0)
//        {
//         ctx.fillStyle="black"
//         ctx.fillRect(135*i,135*j,50,50);
//        }else{
//         ctx.fillStyle="silver"
//         ctx.fillRect(135*i,135*j,50,50);
//        }
//     }
// }
// for (let j = 0; j < 6; j++) {
//     if(i%2==0)
//     {
//   ctx.fillStyle="black"
//   ctx.fillRect(i*25,j*25,25,25)
//     }else{
//       ctx.fillStyle="red"
//       ctx.fillRect(j*25,i*25,25,25)
//     }
//   }
// for (let i = 0; i < 8; i++){
//    if(i%2===0)
//    {
//     ctx.fillStyle="red"
//     ctx.fillRect(25*i,50,25,25)
//    }else{
//     ctx.fillStyle="green"
//     ctx.fillRect(25*i,50,25,25)
//    }
// }

for (let i = 0; i < 5; i++) {
    for(let j=0;j<5;j++)
    {   ctx.beginPath();
        ctx.fillStyle = ["black", "white"][(i + j) % 2];
        ctx.fillRect(j * 50, i * 50, 50, 50);
  }
}

// for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 8; j++) {
//         // ctx.beginPath();
//         ctx.fillStyle = ["black", "white"][(i + j) % 2];
//         ctx.fillRect(j * 20, i * 20, 20, 20);
//     }
// }