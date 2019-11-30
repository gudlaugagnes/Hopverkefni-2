export function objectEmpty(obj) {
  while (obj.firstChild) {
    obj.removeChild(obj.firstChild);
  }
}

export function createElem(elem, text) {
  const el = document.createElement(elem);
  if (text) {
    el.appendChild(document.createTextNode(text));
  }
  return el;
}

export function cardsDisappear(value) {
  const newVal = value.toLowerCase();

  for (const card of document.querySelectorAll('.yfirlit')) {
    if (!card.classList.contains(newVal)) {
      card.classList.add('yfirlit-falid');
    } else if (card.classList.contains('yfirlit-falid')) {
      card.className = `yfirlit ${newVal}`;
    }
  }
}

export function cardsAppear(value) {
  const newVal = value.toLowerCase();

  for (const card of document.querySelectorAll('.yfirlit')) {
    if (card.classList.contains(newVal)) {
      card.className = `yfirlit ${newVal}`;
    }
  }
}

export function activeButtons() {
  for (const buttons of document.querySelectorAll('.button-active')) {
    cardsDisappear(`${buttons.innerHTML}`);
  }
  for (const buttons of document.querySelectorAll('.button-active')) {
    cardsAppear(`${buttons.innerHTML}`);
  }
}
let cnt = 0;
export function buttonGet(button) {
  const buttonTarget = button.target;

  if (buttonTarget.classList.contains('button-active')) {
    buttonTarget.className = 'takkar__takki';
    cnt -= 1;
    if (cnt === 0) {
      cardsAppear('html');
      cardsAppear('css');
      cardsAppear('javascript');
    }
  } else {
    buttonTarget.classList.add('button-active');
    cnt += 1;
  }
  activeButtons();
}
