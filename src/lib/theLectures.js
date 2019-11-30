import { buildTheContent } from './builder';
import { createElem } from './helpers';


export default class Lecture {
  constructor() {
    this.container = document.querySelector('.fyrirlestrar');
    this.url = './lectures.json';
  }


  loadLecture(slug) {
    return fetch(this.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error: could not recover lectures.');
        }
        return res.json();
      })
      .then((data) => {
        const found = data.lectures.find(i => i.slug === slug);
        if (!found) {
          throw new Error('Error: lecture was not found.');
        }
        return found;
      });
  }


  showObject(item) {
    const div = createElem('div');
    div.className = 'sida__efni';

    const storage = window.localStorage.getItem(item.slug);

    const header = document.querySelector('.haus');
    if (item.image !== undefined) {
      header.style.backgroundImage = `url('./${item.image}')`;
    }
    const headerContent = document.querySelector('.haus__efni');
    headerContent.appendChild(createElem('p', item.category));
    headerContent.appendChild(createElem('h1', item.title));
    for (let i = 0; i < item.content.length; i += 1) {
      const type = item.content[i];
      const content = buildTheContent(type);
      div.appendChild(content);
    }
    const page = document.querySelector('.sida');
    page.appendChild(div);

    const button = document.querySelector('.fotur__takki');
    const checkedB = document.querySelector('.takki__hakadur');
    if (storage === 'finished') {
      checkedB.classList.remove('hidden');
    } else {
      button.classList.remove('hidden');
    }

    button.addEventListener('click', () => {
      window.localStorage.setItem(item.slug, 'finished');
      // console.log('saved');
      button.classList.add('hidden');
      checkedB.classList.remove('hidden');
    });
    checkedB.addEventListener('click', () => {
      window.localStorage.removeItem(item.slug);
      // console.log(item);
      button.classList.remove('hidden');
      checkedB.classList.add('hidden');
    });
  }

  showContent(data) {
    // console.log(data);
    this.showObject(data);
  }

  load() {
    const qs = new URLSearchParams(window.location.search);
    const slug = qs.get('slug');

    this.loadLecture(slug)
      .then(data => this.showContent(data));
  }
}
