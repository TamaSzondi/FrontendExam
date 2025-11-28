export function getLongestBookByAuthorName(authors, books, authorName) {
  const searchedAuthor = authors.find(author => author.name === authorName)
  if(!searchedAuthor) return null;

  const foundBooks = books.filter(book => book["author_id"] === searchedAuthor.id)
  if(foundBooks.length === 0) return null;

  const maxPages = Math.max(...foundBooks.map(book => book.pages));
  const longestBooks = foundBooks.filter(book => book.pages === maxPages);

  const sortedBooks = longestBooks.sort((a, b) => a.title.localeCompare(b.title));

  return sortedBooks[0].title;
}