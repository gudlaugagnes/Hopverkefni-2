
export function retrieveLecture(item) {
  const slugB = item.slug;
  window.localStorage.removeItem(slugB);
}

export function saveLecture(item) {
  const slugB = item.slug;
  window.localStorage.setItem(slugB, 'finished');
  console.log('Saved to local storage.');
  console.log(slugB);
}
