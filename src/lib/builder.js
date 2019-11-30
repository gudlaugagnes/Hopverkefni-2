import { createElem } from './helpers.js';


export function titleMaker(title, text, slug) {
  const checkmerki = document.createTextNode('\u2714'); // unicode fyrir checkmerkið
  const storage = window.localStorage.getItem(slug);

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
  if (storage != null) {
    checkP.appendChild(checkmerki);
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
  const imageObject = createElem('img');

  imageObject.className = 'yfirlit__mynd'; 
  imageObject.src = `./${img}`;

  return imageObject;
}

function buildText(item) {
  const div = createElem('div');
  div.className = 'efni__texti';
  const str = item.data.split('\n');
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const strengur = createElem('p', str[i]);
    div.appendChild(strengur);
  }

  return div;
}

function buildQuote(item) {
  const div = createElem('div');
  div.className = 'efni__tilvisun';

  const q = createElem('p', item.data);
  div.appendChild(q);

  const ci = createElem('cite', item.attribute);
  div.appendChild(ci);

  return div;
}

function buildYouT(item) {
  const div = createElem('div');
  div.className = 'efni__myndband';

  const linkur = createElem('iframe');

  linkur.setAttribute('src', item.data);
  linkur.setAttribute('allowfullscreen', 0);
  linkur.setAttribute('frameborder', 0);


  div.appendChild(linkur);
  return div;
}

function buildCoding(item) {
  const div = createElem('div');
  const xmp = createElem('xmp', `${item.data}`);

  div.className = 'efni__kodi';
  div.appendChild(xmp);
  return div;
}

function buildImg(item) {
  const fig = createElem('figure');

  const div = createElem('div');
  div.className = 'efni__mynd';

  const image = createElem('img');
  fig.appendChild(image);
  image.setAttribute('src', `./${item.data}`);
  image.setAttribute('alt', item.caption);

  const capt = createElem('figcaption', item.caption);
  fig.appendChild(capt);
  div.appendChild(fig);
  return div;
}

function buildList(item) {
  const div = createElem('div');
  div.className = 'efni__listi';
  const ul = createElem('ul');
  for (let i = 0; i < item.data.length; i += 1) {
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

  if (item.type === 'text') {
    div = buildText(item);
  } else if (item.type === 'youtube') {
    div = buildYouT(item);
  } else if (item.type === 'quote') {
    div = buildQuote(item);
  } else if (item.type === 'code') {
    div = buildCoding(item);
  } else if (item.type === 'image') {
    div = buildImg(item);
  } else if (item.type === 'heading') {
    div = buildHeader(item);
  } else if (item.type === 'list') {
    div = buildList(item);
  }
  return div;
}
