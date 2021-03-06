import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { TabNavigatorIcons } from '@constants/routes';

interface Props {
  focused: boolean;
}

function TabBarIcon({ focused }: Props) {
  const route = useRoute();
  return <Image source={TabNavigatorIcons[route.name][focused ? 'active' : 'inactive']} />;
}

export default TabBarIcon;
