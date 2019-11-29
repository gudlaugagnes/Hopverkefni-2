export function saveLecture(){
  let slug = item.slug;
  window.localStorage.setItem(slug, 'finished');
  console.log('Saved to local storage.');
  console.log(slug);
}

