import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@app/screens/BookList';
import BookDetail from '@app/screens/BookDetail';
import { ROUTES } from '@constants/routes';
import { stackNavigatorConfig } from '@config/navigation';

const { Screen, Navigator } = createStackNavigator();

function AppNavigator() {
  return (
    <Navigator screenOptions={stackNavigatorConfig as Object}>
      <Screen name={ROUTES.BookList} component={BookList} options={{ title: 'Listado de libros' }} />
      <Screen name={ROUTES.BookDetail} component={BookDetail} options={{ title: 'Detalle del libro' }} />
    </Navigator>
  );
}

export default AppNavigator;
