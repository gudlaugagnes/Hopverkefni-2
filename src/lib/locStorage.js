export function saveLecture() {
  const slug = item.slug;
  window.localStorage.setItem(slug, 'finished');
  console.log('Saved to local storage.');
  console.log(slug);
}
