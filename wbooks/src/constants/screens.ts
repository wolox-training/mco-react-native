import BookDetail from '@screens/BookDetail';
import BookList from '@screens/BookList';

export const SCREENS = [
  {
    id: 1,
    name: 'BookList',
    component: BookList,
    options: { title: 'Listado de libros' }
  },
  {
    id: 2,
    name: 'BookDetail',
    component: BookDetail,
    options: { title: 'Detalle del libro' }
  }
];
