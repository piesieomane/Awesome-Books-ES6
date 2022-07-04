/* eslint-disable import/extensions */

export default class BookDetails {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }
}
