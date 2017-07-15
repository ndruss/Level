

var level = document.querySelector('.level'),
  target = document.querySelector('.target'),
  ball = document.querySelector('.marker'),
  ballGreen = '#a2fa66',
  ob = document.querySelector('.beta'),
  og = document.querySelector('.gamma'),
  debug = document.getElementById('debug'),
  debugOpacity = document.getElementById('debug-opacity');

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

  // To make computation easier we shift the range of x and y to [0,180]
  y += 90;
  x += 90;

  var offset,
    ax = Math.abs(x),
    ay = Math.abs(y);
  if (ax < ay) {
    offset = ay;
  } else {
    offset = ax;
  }

  var opacity = 1 - offset/50;
  opacity = opacity.toFixed(2);

  if (offset < 1) {
    target.style.borderColor = ballGreen;
  } else {
    target.style.borderColor = '#888';
  }
  
  debug.innerHTML = offset;
  debugOpacity.innerHTML = opacity;
  
  // Update position
  ball.style.transform = 'translate('+ x +'px, '+ y +'px)';

  ball.style.opacity = opacity;

}

window.addEventListener('deviceorientation', handleOrientation);