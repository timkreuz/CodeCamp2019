import {getEarth} from './objects/earth.js.js.js';
import {getSky} from './objects/sky.js.js.js'; 
import {getUFO, updateUFO} from './objects/ufo.js.js.js'; 
import {stats} from './objects/stats.js.js.js'; 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var infoCenter = document.getElementById("infoCenter");
var info = infoCenter.getContext("2d");
var earth = getEarth(canvas);
var sky = getSky(canvas);
var ufo = getUFO(canvas);
var i = 0;

function displayScore(stats) {
    info.font = "16px Arial";
    info.fillStyle = "#ffffff";
    info.fillText("Score: " + stats.score + "          Abductions: " + stats.abductions +
        "          Aliens Landed: " + stats.visitors, 8, 20);
}

function drawEarth(earth) {
    ctx.beginPath();
    ctx.rect(earth.x, earth.y, earth.width, earth.height);
    ctx.fillStyle = earth.color;
    ctx.fill();
    ctx.closePath();
}

function drawSky(sky) {
    ctx.beginPath();
    ctx.rect(sky.x, sky.y, sky.width, sky.height);
    ctx.fillStyle = sky.color;
    ctx.fill();
    ctx.closePath();
}

function drawUFO(ufo) {
    ctx.beginPath();
    ctx.rect(ufo.x, ufo.y, ufo.width, ufo.height);
    ctx.fillStyle = ufo.color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
        if (stats.endOfGame) {
        console.log("game over");
        clearInterval(refreshInterval);
    } else {
        console.log(ufo);
        updateUFO(ufo);

        info.clearRect(0, 0, canvas.width, canvas.height);
        displayScore(stats);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawEarth(earth);
        drawSky(sky);
        drawUFO(ufo);
    }
}

var refreshInterval = setInterval(draw, 10);