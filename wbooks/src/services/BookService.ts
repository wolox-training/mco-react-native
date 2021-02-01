import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () => {
  return new Promise(resolve => {
    resolve({
      ok: true,
      data: BOOKS_MOCK
    });
  });
};
