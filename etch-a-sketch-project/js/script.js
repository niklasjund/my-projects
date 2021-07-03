const clickMe = document.getElementById('clickme');
const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');
const pixelBox = document.getElementsByClassName('box');

clickMe.addEventListener('click', buttonClick);

function buttonClick() {
  console.log('Clicked!');
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
  }
}

let k = 0;
function createEtch() {
  for (let i = 1; i < 17; i++) {
    const rows = document.createElement('div');
    rows.classList.add('row');
    rows.id = `row-${i}`;
    for (j = 1; j < 17; j++) {
      k++;
      const boxes = document.createElement('div');
      boxes.classList.add('box');
      boxes.id = `box-${k}`;
      rows.appendChild(boxes);
    }
    container.appendChild(rows);
    console.log(i);
  }

  testFunction();
}

function testFunction() {
  Array.from(pixelBox).forEach((div) =>
    div.addEventListener('mouseover', hoverBox)
  );
}

function hoverBox() {
  this.style.backgroundColor = '#24292e';
}

resetButton.addEventListener('click', resetEtch);

function resetEtch() {
  Array.from(pixelBox).forEach((div) => (div.style.backgroundColor = '#fff'));
}
