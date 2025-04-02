export class BookService {
  async getBooks(query, offset, limit) {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}&offset=${offset}&limit=${limit}`);
      return res.json();
    } catch (e) {
      console.error(e);
    }
  }
}