import React from 'react';
import { StatusBar } from 'react-native';
import BookList from '@screens/BookList';

const App = () => {
  return (
    <>
      <StatusBar />
      <BookList />
    </>
  );
};

export default App;
