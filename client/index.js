const ws = new WebSocket('ws://localhost:8080');

const people = [
  'James',
  'Adam',
  'Chary',
  'Phani',
  'Monica'
];

if(people.length % 2 === 1) {
  people.push('SPIN AGAIN!');
}

var myWheel = new Winwheel({
    'numSegments'    : people.length,
    'segments'       : people.map(function (person, index) {
      return  {
        'fillStyle': index % 2 === 1 ? '#eae56f' : '#e7706f',
        'text' : person
      }
    }),
    'animation' :
    {
        'type'     : 'spinToStop',
        'duration' : 5,
    }
});

function doSpin() { 
  myWheel.stopAnimation(false);
  myWheel.rotationAngle = getRandomInt(0,360);
  myWheel.draw();
  myWheel.animation.spins = getRandomInt(5, 20);

  myWheel.startAnimation();
 }

 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ws.onmessage = () => doSpin();