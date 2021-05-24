export class Post {
  id: number;
  title: string;
  text: string;
  author: string;
  image: string;
  date: number;
  category: string;
  constructor(
    id: number,
    title: string,
    text: string,
    author: string,
    image: string,
    date: number,
    category: string
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.author = author;
    this.image = image;
    this.date = date;
    this.category = category;
  }
}
