import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import { ROUTES } from '@constants/routes';
import { stackNavigatorConfig, tabNavigatorConfig } from '@config/navigation';
import TabBarIcon from '@components/TabBarIcon';
import Wishlist from '@screens/WishList';

const { Screen, Navigator } = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

function LibraryStackScreen() {
  return (
    <Navigator screenOptions={stackNavigatorConfig as object}>
      <Screen name={ROUTES.BookList} component={BookList} options={{ title: 'Listado de libros' }} />
      <Screen name={ROUTES.BookDetail} component={BookDetail} options={{ title: 'Detalle del libro' }} />
    </Navigator>
  );
}

function AppNavigator() {
  return (
    <TabNavigator.Navigator
      initialRouteName={ROUTES.Library}
      screenOptions={{ tabBarIcon: TabBarIcon }}
      tabBarOptions={tabNavigatorConfig}>
      <TabNavigator.Screen name={ROUTES.Library} component={LibraryStackScreen} />
      <TabNavigator.Screen name={ROUTES.Wishlist} component={Wishlist} />
    </TabNavigator.Navigator>
  );
}

export default AppNavigator;
