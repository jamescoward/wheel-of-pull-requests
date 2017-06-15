# wheel-of-pull-requests
Pinwheel to decide things. Uses websockets for some reason.

## Usage

Run `npm i` if you haven't already.

Add the names of the things you want to decide between into the people array in `index.js`

e.g.

```javascript
const people = [ 
  'things',
  'you',
  'want',
  'to',
  'decide',
  'between',
 ];
```

Run `npm start`
To see the wheel go to `localhost:8082`
To spin the wheel go to `localhost:8082/spin`


The spin is probably random-ish, if it isn't I don't know which way it is biased.


### TODO
 - Add a sweet celebration effect
 - Move WinWheel to an npm dep since its on npm now
 - Make code better
