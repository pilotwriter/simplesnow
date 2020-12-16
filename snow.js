
var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
var flakeAmount = 300;
var flakes = [];
var gravitySpeed = 2;

myCanvas.height = window.innerHeight;
myCanvas.width = window.innerWidth;
var width = window.innerWidth;
var height = window.innerHeight;

function random(min, max) {
    let randomVal = Math.floor(Math.random() * max) + min;
    return randomVal;
}

function createFlakes(flakeAmount) {
    for (let i = 0; i < flakeAmount; i++) {
        let flakeX = random(0, myCanvas.width);
        let flakeY = random(0, myCanvas.height);
        let radius = random(1, 8);

        flake = {
            xpoint: flakeX,
            ypoint: flakeY,
            flakeRad: radius
        };
        flakes.push(flake);
    }
}

function drawFlakes() {
    flakes.forEach(element => {
        ctx.beginPath();
        ctx.arc(element.xpoint, element.ypoint, element.flakeRad, 0, Math.PI * 2);
        ctx.fillStyle = "#eee";
        ctx.fill();

    })
}

function gravity() {
    let factor = 0.2;
    flakes.forEach(element => {

        element.ypoint += gravitySpeed * element.flakeRad * factor;
        if (element.ypoint > window.innerHeight) {
            element.ypoint = 0;
        }
        if (element.xpoint > window.innerWidth ) {
            element.xpoint = 0;
        }
        if(element.xpoint < 0 ){
            element.xpoint = window.innerWidth;
        }

        element.xpoint += Math.sin(20);
    })

}
createFlakes(flakeAmount);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlakes();
    gravity();







}

setInterval(draw, 10);