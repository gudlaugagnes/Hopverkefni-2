import { createElem } from './helpers.js';


export function titleMaker(title, text, slug) {

  var store = window.localStorage.getItem(slug);
  var mark = document.createTextNode('\u2714'); //unicode fyrir check

  const tag = document.createElement('div');
  const textTag = createElem('div');
  textTag.className = 'yfirlit__texti';

  const link = document.createElement('a');
  link.href = `./fyrirlestur.html?slug=${slug}`;

  const textEl = document.createElement('p');
  const titleEl = document.createElement('h2');

  textEl.appendChild(document.createTextNode(text.toUpperCase()));
  titleEl.appendChild(document.createTextNode(title));

  const check = document.createElement('div');
  check.className = 'yfirlit__klarad';
  const checkP = createElem('p');

  if (store != null) {
    checkP.appendChild(mark);
  }
  check.appendChild(checkP);

  textTag.appendChild(textEl);
  textTag.appendChild(titleEl);
  textTag.appendChild(link);
  tag.appendChild(textTag);
  tag.appendChild(check);

  return tag;
}


export function imgMaker(img) {
  if (!img) {
    return document.createElement('div');
  }

  const imgEl = createElem('img');
  imgEl.className = 'yfirlit__mynd';
  imgEl.src = `./${img}`;
  return imgEl;
}

function buildText(item) {
  const div = createElem('div');
  div.className = 'efni__texti';
  const strings = item.data.split('\n');

  for (let i = 0; i < strings.length; i += 1) {
    const text = createElem('p', strings[i]);
    div.appendChild(text);
  }

  return div;
}

function buildQuote(item) {
  const div = createElem('div');
  div.className = 'efni__tilvisun';

  const quote = createElem('p', item.data);
  const citation = createElem('cite', item.attribute);

  div.appendChild(quote);
  div.appendChild(citation);

  return div;
}+
function buildYouT(item) {
  const div = createElem('div');
  div.className = 'efni__myndband';
  const link = createElem('iframe');
  link.setAttribute('src', item.data);
  link.setAttribute('frameborder', 0);
  link.setAttribute('allowfullscreen', 0);

  div.appendChild(link);
  return div;
}


function buildCoding(item) {
  const div = createElem('div');
  const p = createElem('xmp', `${item.data}`);
  div.className = 'efni__kodi';
  div.appendChild(p);

  return div;
}

function buildImg(item) {
  const div = createElem('div');
  const figure = createElem('figure');
  div.className = 'efni__mynd';
  const image = createElem('img');
  figure.appendChild(image);
  image.setAttribute('src', `./${item.data}`);
  image.setAttribute('alt', item.caption);
  const caption = createElem('figcaption', item.caption);
  figure.appendChild(caption);
  div.appendChild(figure);
  return div;
}

function buildList(item) {
  const div = createElem('div');
  div.className = 'efni__listi';

  const ul = createElem('ul');

  for (let i = 0; i < item.data.length; i++) {
    ul.appendChild(createElem('li', item.data[i]));
  }
  div.appendChild(ul);
  return div;
}


function buildHeader(item) {
  const div = createElem('div');
  div.className = 'efni__toppur';
  div.appendChild(createElem('h2', item.data));
  return div;
}

export function buildTheContent(item) {
  let div;

  if (item.type == 'youtube') {
    div = buildYouT(item);
  } else if (item.type == 'text') {
    div = buildText(item);
  } else if (item.type == 'quote') {
    div = buildQuote(item);
  } else if (item.type == 'heading') {
    div = buildHeader(item);
  } else if (item.type == 'list') {
    div = buildList(item);
  } else if (item.type == 'image') {
    div = buildImg(item);
  } else if (item.type == 'code') {
    div = buildCoding(item);
  }
  return div;
}
