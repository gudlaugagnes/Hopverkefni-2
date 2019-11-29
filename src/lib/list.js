import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
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

  load() {
    empty(this.container);
    this.loadLectures()
      .then(data => this.renderData(data));
  }
}
