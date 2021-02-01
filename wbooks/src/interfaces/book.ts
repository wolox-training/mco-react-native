export interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string | null;
  genre: string;
  publisher: string;
  year: string;
}

export interface BookState {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
}
