export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
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
  const new_Val = value.toLowerCase();

  for (const card of document.querySelectorAll('.card')) {
    if (!card.classList.contains(new_Val)) {
      card.classList.add('card-hidden');
    } else if (card.classList.contains('card-hidden')) {
      card.className = `card ${new_Val}`;
    }
  }
}

export function cardsAppear(value) {
  const new_Val = value.toLowerCase();

  for (const card of document.querySelectorAll('.card')) {
    if (card.classList.contains(new_Val)) {
      card.className = `card ${new_Val}`;
    }
  }
}