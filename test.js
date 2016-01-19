"use strict";

/* eslint no-use-before-define: 0 */
/* eslint no-process-exit: 0 */

var keypress = require("/Users/jenkins/node_modules/keypress");
var sphero = require("/Users/jenkins/node_modules/sphero"),
    bb8 = sphero("1467cd62cd9848b9b52e1924b1397c24");
	
var defaultColor = "palevioletred";
var collisionColor = "red";

bb8.connect(listen);

function handle(ch, key) {
  
  bb8.color(defaultColor);
  
  bb8.detectCollisions();
  
  bb8.on("collision", function(data) {
    //process.stdin.pause();
	console.log("collision detected");
    console.log("  data:", data);

    bb8.color(collisionColor);

    setTimeout(function() {
      bb8.color(defaultColor);
    }, 1000);
	//process.stdin.resume();
  });

  
  var stop = bb8.roll.bind(bb8, 0, 0),
      roll = bb8.roll.bind(bb8, 60);

  if (key.ctrl && key.name === "c") {
    process.stdin.pause();
    process.exit();
  }

  if (key.name === "e") {
    bb8.startCalibration();
  }

  if (key.name === "w") {
    bb8.finishCalibration();
  }

  if (key.name === "i") {
    bb8.getBluetoothInfo(function(err, data) {
      if (err) {
        console.log("error: ", err);
      } else {
        console.log("data:");
        console.log("  name:", data.name);
        console.log("  btAddress:", data.btAddress);
        console.log("  separator:", data.separator);
        console.log("  colors:", data.colors);
      }
    });

    //Get battery infos
    bb8.getPowerState(function(err, data) {
      if (err) {
        console.log("error: ", err);
      } else {
        console.log("data:");
        console.log("  recVer:", data.recVer);
        console.log("  batteryState:", data.batteryState);
        console.log("  batteryVoltage:", data.batteryVoltage);
        console.log("  chargeCount:", data.chargeCount);
        console.log("  secondsSinceCharge:", data.secondsSinceCharge);
      }
    });
  }

  if (key.name === "up") {
    roll(0);
  }

  if (key.name === "down") {
    roll(180);
  }

  if (key.name === "left") {
    roll(270);
  }

  if (key.name === "right") {
    roll(90);
  }

  if (key.name === "space") {
    stop();
  }
}

function listen() {
  keypress(process.stdin);
  process.stdin.on("keypress", handle);

  console.log("starting to listen for arrow key presses");

  process.stdin.setRawMode(true);
  process.stdin.resume();
}

