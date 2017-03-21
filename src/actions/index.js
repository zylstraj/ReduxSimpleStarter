export function selectBook(book) {
  // selectbook is an action creator. Needs to return an action
  // an object with a type property - type and payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
