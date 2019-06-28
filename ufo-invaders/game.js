import {getEarth} from './objects/earth.js';
import {getSky} from './objects/sky.js'; 
import {getUFO, updateUFO} from './objects/ufo.js'; 
import {stats} from './objects/stats.js'; 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var infoCenter = document.getElementById("infoCenter");
var info = infoCenter.getContext("2d");
var earth = getEarth(canvas);
var sky = getSky(canvas);
var ufo = getUFO(canvas);

var drawables = [earth, sky, ufo];
var i = 0;

function displayScore(stats) {
    info.font = "16px Arial";
    info.fillStyle = "#ffffff";
    info.fillText("Score: " + stats.score + "          Abductions: " + stats.abductions +
        "          Aliens Landed: " + stats.visitors, 8, 20);
}

function drawObject(object) {
    ctx.beginPath();
    ctx.rect(object.x, object.y, object.width, object.height);
    ctx.fillStyle = object.color;
    ctx.fill();
    ctx.closePath();
}

function drawAll(drawables) {
    
    info.clearRect(0, 0, canvas.width, canvas.height);
    displayScore(stats);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < drawables.length; i++) {
        drawObject(drawables[i]);
    }   
}

function updateAndDraw() {
        if (stats.endOfGame) {
        console.log("game over");
        clearInterval(refreshInterval);
    } else {
        updateUFO(ufo);
        drawAll(drawables);
    }
}

var refreshInterval = setInterval(updateAndDraw, 10);