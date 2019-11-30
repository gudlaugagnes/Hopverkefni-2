import Lect from './lib/theLectures';
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
    for (const button of document.querySelectorAll('.takkar__takki')) {
      button.addEventListener('click', buttonGet);
    }
  }
});
