
const debug = false;

// const level = document.querySelector('.level');
const target = document.querySelector('.target');
const ball = document.querySelector('.marker');
const ballGreen = '#a2fa66';
const ob = document.querySelector('.beta');
const og = document.querySelector('.gamma');
const debugOutput = document.getElementById('debug');
const debugOpacity = document.getElementById('debug-opacity');

const axis = {
  x: document.querySelector('.x-axis'),
  y: document.querySelector('.y-axis')
}

if (debug) {
  document.body.classList.add('debug');
}

function handleOrientation(event) {
  let x = event.gamma.toFixed(1); // In degree in the range [-90,90]
  let y = event.beta.toFixed(1);  // In degree in the range [-180,180]

  let ax = Math.abs(x);
  let ay = Math.abs(y);

  let offset = Math.max(ax, ay);
  let inRange = offset < 90 ? true : false;

  let opacity = (1 - offset/100).toFixed(2);

  // Update position
  ball.style.transform = `translate(${x}px, ${y}px)`;

  if (debug) {
    og.innerHTML = x;
    ob.innerHTML = y;
    debugOutput.innerHTML = offset;
    debugOpacity.innerHTML = opacity;
  }

  if (ax < 1) {
    axis.x.style.background = ballGreen;
  } else {
    axis.x.style.background = '#888';
  }

  axis.x.style.background = ay < 1 ? ballGreen : '#888';
  axis.y.style.background = ax < 1 ? ballGreen : '#888';

  if (offset < 1) {
    target.style.borderColor = ballGreen;
  } else {
    // Update opacity
    ball.style.opacity = inRange ? opacity : 0;
    target.style.borderColor = '#888';
  }

}

window.addEventListener('deviceorientation', handleOrientation);
