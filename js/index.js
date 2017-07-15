

var level = document.querySelector('.level'),
  ball = document.querySelector('.marker'),
  ob = document.querySelector('.beta'),
  og = document.querySelector('.gamma'),
  debug = document.getElementById('debug');

// var maxX = level.clientWidth  - ball.clientWidth;
// var maxY = level.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.gamma.toFixed(1); // In degree in the range [-90,90]
  var y = event.beta.toFixed(1);  // In degree in the range [-180,180]
  
  og.innerHTML = "x: " + x + "\n";
  ob.innerHTML  = "y : " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (y >  90) {
    y =  90;
  }
  if (y < -90) {
    y = -90;
  }

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  y += 90;
  x += 90;

  // var r = ball.clientWidth/2;
  // ball.style.top  = (maxX*x/180 - r) + "px";
  // ball.style.left = (maxY*y/180 - r) + "px";


  ball.style.transform = 'translate('+ x +'px, '+ y +'px)';

  var offset,
    ax = Math.abs(x),
    ay = Math.abs(y);
  if (ax < ay) {
    offset = ay;
  } else {
    offset = ax;
  }
  
  debug.innerHTML = offset;
}

window.addEventListener('deviceorientation', handleOrientation);