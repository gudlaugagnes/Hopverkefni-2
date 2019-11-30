import { imgMaker, titleMaker } from './builder';
import { objectEmpty, createElem } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.listi');
    this.url = '/lectures.json';
  }

  // sækja fyrirlestra efnið
  loadLectures() {
    return fetch(this.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error: not able to obtain lectures.');
        }
        return res.json();
      });
  }

  showContent(data) {
    // console.log(data);
    data.lectures.map((item) => {
      this.showObject(item);
    });
  }

  showObject(obj) {
    const card = createElem('div');
    card.className = `yfirlit ${obj.category}`;

    const imgEl = imgMaker(obj.thumbnail);
    card.appendChild(imgEl);


    const div = createElem('div');
    div.className = 'linkur';

    const link = createElem('a');
    link.setAttribute('href', `./fyrirlestur.html?slug=${obj.slug}`);
    link.appendChild(div);

    card.appendChild(link);

    const titleEl = titleMaker(obj.title, obj.category, obj.slug);
    titleEl.className = 'yfirlit__efni';
    card.appendChild(titleEl);
    this.container.appendChild(card);
  }

  load() {
    objectEmpty(this.container);
    this.loadLectures()
      .then(data => this.showContent(data));
  }
}
