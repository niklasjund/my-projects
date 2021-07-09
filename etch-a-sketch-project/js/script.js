/* 

    NOTES: 

    - Container (pixelBoxes) langsam einblenden lassen
    - Max-Wert für rows/boxes 64 (dementsprechend "user-Angabe + 1" in for-loops angeben)
    - User-Input für den Reset, um Angabe für neue Große (max 64x64) zu erhalten
    - Reset-Button evtl neu positionieren & animieren, da sonst im Weg

*/

const clickMe = document.getElementById('clickme');
const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');
const pixelBox = document.getElementsByClassName('box');

clickMe.addEventListener('click', buttonClick);

function buttonClick() {
  this.style.opacity = 0;
  this.classList.add('moveUp');
  this.addEventListener('transitionend', startEtch);
}

function startEtch(e) {
  if (e.propertyName == 'opacity') {
    clickMe.remove();
    createEtch();
    resetButton.style.opacity = 1;
    resetButton.classList.add('moveReset');
    container.style.opacity = 1;
  }
}

let userInput = 32;
let k = 0;

function createEtch() {
  for (let i = 0; i < userInput; i++) {
    const rows = document.createElement('div');
    rows.classList.add('row');
    rows.id = `row-${i}`;
    for (j = 0; j < userInput; j++) {
      k++;
      const boxes = document.createElement('div');
      boxes.classList.add('box');
      boxes.id = `box-${k}`;
      rows.appendChild(boxes);
    }
    container.appendChild(rows);
  }
  testFunction();
}

function testFunction() {
  Array.from(pixelBox).forEach(
    (div) => div.addEventListener('click', hoverBox) // für hover 'mouseover'
  );
}

function hoverBox() {
  this.style.backgroundColor = '#24292e';
  //   this.style.borderColor = 'black'; Border besser weglassen(?)
}

resetButton.addEventListener('click', resetEtch);

function resetEtch() {
  Array.from(pixelBox).forEach(
    (div) => div.remove() // (div.style.backgroundColor = '#fff') // (div.style.borderColor = '#d1d5da') Border besser weglassen(?)
  );
  userInput = prompt('Size: '); // evtl später "Check" einbinden, ob Zahlen eingegeben wurden + Maximum
  createEtch();
}
