import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '@constants/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          {SCREENS.map(screen => (
            <Stack.Screen
              key={screen.id}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
