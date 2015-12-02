"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.detectCollisions();
  orb.color("green");

  orb.on("collision", function(data) {
    console.log("collision detected\n", data);

    orb.color("red");

    setTimeout(function() {
      orb.color("green");
    }, 1000);
  });
});
