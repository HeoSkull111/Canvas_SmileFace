let myCanvas = document.getElementById("my-canvas");

const WIDTH = myCanvas.width; //720
const HEIGHT = myCanvas.height; //480

let pen = myCanvas.getContext("2d");
let click = document.getElementById("my-canvas").addEventListener("click", drawFace);

// // Vẽ vòng tròn
// pen.beginPath();
// pen.fillStyle = '#e68a00'
// pen.arc(WIDTH / 2, HEIGHT / 2, 220, 0, Math.PI * 2);
// pen.fill()
// pen.stroke();
// //Vẽ miệng
// pen.beginPath();
// pen.arc(WIDTH / 2, HEIGHT / 2+50, 120, Math.PI* 2, Math.PI );
// pen.stroke();
// pen.beginPath
// pen.moveTo(240,  HEIGHT / 2+51)    
// pen.lineTo(480, HEIGHT / 2+51)
// pen.stroke();
// //Vẽ mũi
// pen.beginPath()
// pen.moveTo(WIDTH / 2, 260)    
// pen.lineTo(WIDTH / 2, HEIGHT / 2+20)
// pen.stroke();
// //Vẽ mắt
// pen.beginPath();
// pen.fillStyle = 'black'
// pen.arc(250, 220, 35, 0, 2 * Math.PI);
// pen.fill()
// pen.stroke();

// pen.beginPath();
// pen.fillStyle = 'black'
// pen.arc(445, 220, 35, 0, 2 * Math.PI);
// pen.fill();
// pen.stroke();


const FPS = 1;
let startFrameTime = Date.now();



function drawFace(colorEye) {
    // Vòng tròn ngoài cùng
    pen.fillStyle = "red";
    pen.beginPath();
    pen.arc(WIDTH / 2, HEIGHT / 2, 250, 0, Math.PI * 2);
    pen.lineWidth = "5";
    pen.stroke();
    pen.fillStyle = "rgb(34,118,207)";
    pen.fill();

    //  face 
    pen.beginPath();
    pen.ellipse(WIDTH / 2, HEIGHT / 2 + 80, 200, 170, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = "white";
    pen.fill();

    //  mouth 
    pen.beginPath();
    pen.arc(WIDTH / 2, HEIGHT / 2 + 160, 50, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = "black";
    pen.fill();

    pen.beginPath();
    pen.ellipse(WIDTH / 2, HEIGHT / 2 + 170, 48, 40, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = "red";
    pen.fill();


    //  eye 
    pen.beginPath();
    pen.ellipse(248, 230, 50, 60, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = colorEye;
    pen.fill();
    pen.beginPath();
    pen.ellipse(270, 230, 20, 30, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = "black";
    pen.fill();
    pen.beginPath();
    pen.ellipse(270, 230, 5, 10, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = colorEye;
    pen.fill();


    pen.beginPath();
    pen.ellipse(352, 230, 50, 60, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = colorEye;
    pen.fill();
    pen.beginPath();
    pen.ellipse(330, 230, 20, 30, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = "black";
    pen.fill();
    pen.beginPath();
    pen.ellipse(330, 230, 5, 10, 0, 0, Math.PI * 2);
    pen.stroke();
    pen.fillStyle = colorEye;
    pen.fill();
    pen.closePath();
    //  nose 
    pen.beginPath();
    pen.lineWidth = "3";
    pen.arc(300, 290, 30, 0, 2 * Math.PI);
    pen.stroke();
    pen.fillStyle = "red";
    pen.fill();

    //  Beard 
    pen.lineWidth = "5";
    beard(125, 294, 230, 335);
    beard(113, 370, 222, 366);
    beard(125, 434, 222, 398);
    beard(376, 335, 465, 282);
    beard(385, 369, 490, 354);
    beard(385, 400, 488, 420);
    function beard(x1, y1, x2, y2) {
        pen.beginPath();
        pen.moveTo(x1, y1);
        pen.lineTo(x2, y2);
        pen.stroke();
    }
}

let colorEye = "white";

function gameLoop() {

    pen.clearRect(0, 0, WIDTH, HEIGHT);
    let currentFrameTime = Date.now();
    let deltaTime = currentFrameTime - startFrameTime;

    let actualFPS = 1000 / deltaTime;
    pen.textStyle = "90px Arial";
    pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 30);
    drawFace(colorEye)
    if(colorEye == "white"){
        colorEye = "black";
    } else {
        colorEye = "white";
    }
    startFrameTime = currentFrameTime;
}

setInterval(gameLoop, 1000 / FPS);
