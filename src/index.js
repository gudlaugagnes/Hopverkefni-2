import Lect from './lib/theLectures.js';
import { buttonGet } from './lib/helpers';
import Listi from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('fyrirlestrar');

  if (isLecturePage) {
    const lec = new Lect();
    lec.load();
  } else {
    const listi = new Listi();
    listi.load();
    const buttons = document.querySelectorAll('.takkar__takki');
    for (const button of document.querySelectorAll('.takkar__takki')) {
      button.addEventListener('click', buttonGet);
    }
    console.log(buttons.length);
  }
});
